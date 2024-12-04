import {Provider} from '@ethersproject/abstract-provider';
import {Signer} from '@ethersproject/abstract-signer';
import MultiCall from '@indexed-finance/multicall';
import {ContractReceipt, ethers} from 'ethers';
import {ChainId, DECIMALS, METACORE_ADDRESSES, METAPAYMENT_ADDRESSES, RPC_URLS} from './constants';
import {Erc20__factory, Metacore__factory, Metapayment__factory,} from './contracts/types';
import {Balance, Contracts, EnoughCoins} from './types';

export class MetaPaymentClient {
  private readonly multi: MultiCall;

  // public static fromUrl(url: string): MetaPaymentClient {
  //   const provider = new ethers.providers.JsonRpcProvider(url);
  //   return new this(provider);
  // }
  //
  // public static fromChainId(chainId: ChainId): MetaPaymentClient {
  //   const provider = new ethers.providers.JsonRpcProvider(RPC_URLS[chainId]);
  //   return new this(provider);
  // }

  constructor(chainId: ChainId, private readonly signerOrProvider: Signer | Provider) {
    this.signerOrProvider = signerOrProvider;
    // const multiProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[chainId]);
    // this.multi = new MultiCall(multiProvider);
    this.multi = new MultiCall(this.provider);
  }

  public get signer(): Signer {
    if (Signer.isSigner(this.signerOrProvider)) {
      return this.signerOrProvider;
    }

    throw new Error('Meta Payment client has no signer');
  }

  public get provider(): Provider {
    if (Provider.isProvider(this.signerOrProvider)) {
      return this.signerOrProvider;
    }
    if (!this.signerOrProvider.provider) {
      throw new Error('Meta Payment client has no provider');
    }

    return this.signerOrProvider.provider;
  }

  protected async getChainId(): Promise<ChainId> {
    const { chainId } = await this.provider.getNetwork();
    return chainId;
  }

  protected async getContracts(): Promise<Contracts> {
    const chainId = await this.getChainId();
    // const metaCore = Metacore__factory.connect(
    //   METACORE_ADDRESSES[chainId],
    //   this.signerOrProvider
    // );
    // const metaPayment = await metaCore.getPaymentChannelAddress();
    return {
      metaCore: Metacore__factory.connect(
          METACORE_ADDRESSES[chainId],
          this.signerOrProvider
      ),
      metaPayment: Metapayment__factory.connect(
          METAPAYMENT_ADDRESSES[chainId],
          this.signerOrProvider
      ),
    };
  }

  public async getBalance(token: string, id?: number): Promise<Balance> {
    const { metaCore, metaPayment } = await this.getContracts();

    let userAddress;
    let userId;
    if (id) {
      userAddress = await metaCore.getUserAddress(id);
      userId = id;
    } else {
      userAddress = await this.signer.getAddress();
      userId = await metaCore.getUserId(userAddress);
    }

    const target = metaPayment.address;
    const inputs = [
      {
        target,
        function: 'getFreezeStatusToken',
        args: [token],
      },
      {
        target,
        function: 'getBalance',
        args: [token, userId],
      },
      {
        target: token,
        interface: Erc20__factory.abi,
        function: 'balanceOf',
        args: [userAddress],
      },
    ];
    const [, parameters] = await this.multi.multiCall(
      Metapayment__factory.abi as any,
      inputs as any
    );

    return {
      token: token,
      frozen: parameters[0],
      internal: ethers.utils.formatUnits(parameters[1], DECIMALS),
      direct: ethers.utils.formatUnits(parameters[2], DECIMALS),
    };
  }

  public async getDirectPaymentStatus(id?: number): Promise<boolean> {
    const { metaCore, metaPayment } = await this.getContracts();
    const userId =
      id || (await metaCore.getUserId(await this.signer.getAddress()));

    return await metaPayment.getDirectPaymentStatus(userId);
  }

  public async getReservedAddress(id?: number): Promise<string> {
    const { metaCore, metaPayment } = await this.getContracts();
    const userId =
      id || (await metaCore.getUserId(await this.signer.getAddress()));
    return await metaPayment.getReservedAddress(userId);
  }

  public async claimAll(token: string): Promise<ContractReceipt> {
    const { metaPayment } = await this.getContracts();
    const tx = await metaPayment['claim(address)'](token);
    return tx.wait();
  }

  public async claim(token: string, amount: string): Promise<string> {
    const { metaCore, metaPayment } = await this.getContracts();
    const userId = await metaCore.getUserId(await this.signer.getAddress());
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);

    const tx = await metaPayment['claim(address,uint256)'](token, parsedAmount);
    await tx.wait();

    const amountLeft = await metaPayment.getBalance(token, userId);
    return ethers.utils.formatUnits(amountLeft, DECIMALS);
  }

  public async add(token: string, amount: string): Promise<string> {
    const { metaCore, metaPayment } = await this.getContracts();
    const userId = await metaCore.getUserId(await this.signer.getAddress());
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);

    await this.approveToken(token, metaPayment.address, amount);
    const tx = await metaPayment.add(token, parsedAmount);
    await tx.wait();

    const amountTotal = await metaPayment.getBalance(token, userId);
    return ethers.utils.formatUnits(amountTotal, DECIMALS);
  }

  public async setDirectPaymentStatus(
    status: boolean
  ): Promise<ContractReceipt> {
    const { metaPayment } = await this.getContracts();
    const tx = await metaPayment.setDirectPayment(status);
    return tx.wait();
  }

  public async transfer(
    token: string,
    to: number,
    amount: string
  ): Promise<ContractReceipt> {
    const { metaCore, metaPayment } = await this.getContracts();
    const userId = await metaCore.getUserId(await this.signer.getAddress());
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);

    const frozen = await metaPayment.getFreezeStatusToken(token);
    if (!frozen) {
      const directPayment = await metaPayment.getDirectPaymentStatus(userId);
      if (directPayment) {
        await this.approveToken(token, metaPayment.address, amount);
      }
    }

    const tx = await metaPayment.transfer(token, to, parsedAmount);
    return tx.wait();
  }

  public async approveToken(
    token: string,
    to: string,
    amount?: string
  ): Promise<void> {
    const account = await this.signer.getAddress();
    const tokenContract = Erc20__factory.connect(token, this.signer);

    const a = amount
      ? ethers.utils
          .parseUnits(amount, DECIMALS)
          .add(ethers.utils.parseUnits('1', DECIMALS))
      : ethers.constants.MaxUint256;
    const approvedAmount = await tokenContract.allowance(account, to);
    if (a.gt(approvedAmount)) {
      const tx = await tokenContract.approve(to, a);
      await tx.wait();
    }
  }

  public async checkEnoughCoins(
    token: string,
    userId: number,
    requredAmount: string
  ): Promise<EnoughCoins> {
    const parsedRequredAmount = await ethers.utils.parseUnits(
      requredAmount,
      DECIMALS
    );
    const { metaPayment } = await this.getContracts();
    let amountCoinAll = await metaPayment.getBalance(token, userId);
    const disableDirectDecreaze =
      await metaPayment.disableDirectDecrease(userId);
    const frozen = await metaPayment.getFreezeStatusToken(token);
    if (!disableDirectDecreaze && !frozen) {
      const tokenContract = Erc20__factory.connect(token, this.signer);
      const userAddress = metaPayment.getPaymentAddressForId(userId);
      amountCoinAll = amountCoinAll.add(
        await tokenContract.balanceOf(userAddress)
      );
    }

    return {
      enough: amountCoinAll.gte(parsedRequredAmount),
      amountCoins: ethers.utils.formatUnits(amountCoinAll, DECIMALS),
    };
  }
}
