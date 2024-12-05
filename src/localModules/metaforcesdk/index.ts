import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import MultiCall from '@indexed-finance/multicall';
import { BigNumber, BigNumberish, ContractTransaction, ethers } from "ethers";
import { range } from "lodash";
import { v4 as uuidv4 } from "uuid";
import * as allConstants from "./constants";
import {
  BURNER_ROLE,
  BUTTON_APP_ADDRESSES,
  BUYBACK_POOL_ADDRESS,
  ChainId,
  COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL,
  CORE_ADDRESSES,
  DAI_ADDRESSES,
  DECIMALS,
  DO_SPACES,
  ENERGY_ADDRESSES,
  EQN_ADDRESSES,
  EXCHANGE_CONTROLLER_ADDRESS,
  FIRST_PACK_PRICE_IN_USD,
  FORCESWAP_ADDRESS,
  HMFS1_ADDRESSES,
  HMFS2_ADDRESSES,
  HMFS3_ADDRESSES,
  HMFS4_ADDRESSES,
  HMFS5_ADDRESSES,
  HMFS6_ADDRESSES,
  HMFS7_ADDRESSES,
  HMFS8_ADDRESSES,
  HOLDING_ADDRESSES,
  LEVELS_COUNT,
  MAX_TIMESTAMP,
  METACORE_ADDRESSES,
  METAFORCE_ADDRESSES,
  METAPAYMENT_ADDRESSES,
  META_FORCE_CONTRACT_ROLE,
  META_ROLE,
  MFS_ADDRESSES,
  MINTER_ROLE,
  NFT_CHIP1_ADDRESSES,
  NFT_CHIP2_ADDRESSES,
  NFT_CHIP3_ADDRESSES,
  NFT_CHIP4_ADDRESSES,
  NFT_CHIP5_ADDRESSES,
  NFT_CHIP6_ADDRESSES,
  NFT_CHIP7_ADDRESSES,
  NFT_CHIP8_ADDRESSES,
  NFT_CHIP9_ADDRESSES,
  NFT_GRAPHQL_ENDPOINTS,
  ONE,
  QEN_ADDRESSES,
  QRE_ADDRESSES,
  QW_ADDRESSES,
  REGISTRY_ADDRESSES,
  REQUEST_ADDRESSES,
  URL_SQUID,
  UV_V2_UPGRADE_DT,
  VESTING_FUND_ADDRESS,
} from "./constants";

import {
  ButtonApp__factory,
  Core__factory,
  Energy__factory,
  Erc20__factory,
  ExchangeController__factory,
  Forceswap__factory,
  Holding__factory,
  MetaCore__factory,
  MetaForce__factory,
  MetaPayment__factory,
  Mfs__factory,
  QuantumWave__factory,
  Registry__factory,
  Request__factory
} from "./contracts/types";

import {
  Balances,
  CapacityResponse,
  Contracts,
  Deposit,
  EnoughMatic,
  Event,
  ForceBuybackHistoryResponse,
  ForceSwapBuyHistoryResponse,
  ForceSwapOrderChangesResponse,
  ForceSwapOrderInfo,
  InternalTransferIdType,
  MachineResponse,
  MarketingUserForBinary,
  MarketingUserForLevel,
  MfsBuybackOrderRequest,
  MfsRequest,
  MyWaveResponse,
  NftChipResponse,
  Pack,
  ReferralUserInfo,
  RequestedMFS,
  RewardType,
  Stats,
  Tokens,
  TokenTx,
  TokenTxEventData,
  TokenTxType,
  UserInfo,
  VestingInfo,
  VESTING_TARIFFS,
  WaveChipResponse,
  WaveResponse,
  Web3ForceSwapOrder
} from "./types";

type fCallback = (accept: boolean) => void;

export class ForceDeltaClient {
  private readonly multi: MultiCall;
  // private readonly provider: Provider;
  private callbackFn: fCallback;
  readonly DEFAULT_BLOCK_CONFIRMS = 17;

  // public static fromUrl(url: string, fn: fCallback): ForceDeltaClient {
  //   const provider = new ethers.providers.JsonRpcProvider(url);
  //   return new this(provider, fn);
  // }
  //
  // public static fromChainId(chainId: ChainId, fn: fCallback): ForceDeltaClient {
  //   const provider = new ethers.providers.JsonRpcProvider(RPC_URLS[chainId]);
  //   return new this(provider, fn);
  // }

  constructor(
    private readonly signerOrProvider: Signer | Provider,
    fn: fCallback
  ) {
    this.callbackFn = fn;
    this.signerOrProvider = signerOrProvider;
    // const multiProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[chainId]);
    // this.multi = new MultiCall(multiProvider);
    this.multi = new MultiCall(this.provider);
  }

  public get signer(): Signer {
    if (Signer.isSigner(this.signerOrProvider)) {
      return this.signerOrProvider;
    }

    throw new Error("Force Delta client has no signer");
  }

  public get provider(): Provider {
    if (Provider.isProvider(this.signerOrProvider)) {
      return this.signerOrProvider;
    }
    if (!this.signerOrProvider.provider) {
      throw new Error("Force Delta client has no provider");
    }

    return this.signerOrProvider.provider;
  }

  protected async getChainId(): Promise<ChainId> {
    const { chainId } = await this.provider.getNetwork();
    return chainId;
  }

  protected async getContracts(): Promise<Contracts> {
    const chainId = await this.getChainId();
    return {
      registry: Registry__factory.connect(
        REGISTRY_ADDRESSES[chainId],
        this.provider
      ),
      metaCore: MetaCore__factory.connect(
        METACORE_ADDRESSES[chainId],
        this.provider
      ),
      metaPayment: MetaPayment__factory.connect(
        METAPAYMENT_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      core: Core__factory.connect(
        CORE_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      holding: Holding__factory.connect(
        HOLDING_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      metaForce: MetaForce__factory.connect(
        METAFORCE_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      request: Request__factory.connect(
        REQUEST_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      mfs: Mfs__factory.connect(MFS_ADDRESSES[chainId], this.signerOrProvider),
      stablecoin: Mfs__factory.connect(
        DAI_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      energy: Energy__factory.connect(
        ENERGY_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      buttonApp: ButtonApp__factory.connect(
        BUTTON_APP_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      quantumWave: QuantumWave__factory.connect(
        QW_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      eqn: Erc20__factory.connect(
        EQN_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      qen: Erc20__factory.connect(
        QEN_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      qre: Erc20__factory.connect(
        QRE_ADDRESSES[chainId],
        this.signerOrProvider
      ),
      hMfs: [
        Erc20__factory.connect(HMFS1_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS2_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS3_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS4_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS5_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS6_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS7_ADDRESSES[chainId], this.signerOrProvider),
        Erc20__factory.connect(HMFS8_ADDRESSES[chainId], this.signerOrProvider),
      ],
      forceswap: Forceswap__factory.connect(
        FORCESWAP_ADDRESS[chainId],
        this.signerOrProvider
      ),
      exchangeController: ExchangeController__factory.connect(
        EXCHANGE_CONTROLLER_ADDRESS[chainId],
        this.signerOrProvider
      ),
    };
  }

  public async getTokenTransactions(
    token: string,
    pageSize: number,
    pageNumber: number,
    userId?: number
  ): Promise<TokenTx[]> {
    const { metaCore } = await this.getContracts();

    const userAddr = userId
      ? await metaCore.getUserAddress(userId)
      : await this.signer.getAddress();
    userId = userId || (await metaCore.checkRegistration(userAddr)).toNumber();

    const events = (
      await this.getJSONFromSubSquid(
        await this.genTokenTransactionsQuery(
          token,
          pageSize,
          pageNumber,
          userAddr,
          userId
        )
      )
    ).data.events;

    const txs: TokenTx[] = [];
    for (const event of events) {
      const txHash = (event.id as string).split("-")[0];
      if (!txHash) throw new Error("Unexpected event id format");

      let eventData: TokenTxEventData;

      switch (event.event.__typename) {
        case TokenTxType.DirectIncrease:
          eventData = {
            type: TokenTxType.DirectIncrease,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.InternalIncrease:
          eventData = {
            type: TokenTxType.InternalIncrease,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.DirectDecrease:
          eventData = {
            type: TokenTxType.DirectDecrease,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.InternalDecrease:
          eventData = {
            type: TokenTxType.InternalDecrease,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.InternalTransfer:
          let id;
          let idType: InternalTransferIdType;
          if (event.event.from.id == userId.toString()) {
            id = event.event.to.id;
            idType = "receiver";
          } else {
            id = event.event.from.id;
            idType = "sender";
          }
          eventData = {
            type: TokenTxType.InternalTransfer,
            id,
            idType,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.InternalTransferToContract:
          eventData = {
            type: TokenTxType.InternalTransferToContract,
            contractAddress: event.event.contractAddress,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        case TokenTxType.InternalTransferFromContract:
          eventData = {
            type: TokenTxType.InternalTransferFromContract,
            contractAddress: event.event.contractAddress,
            amount: ethers.utils.formatUnits(event.event.amount, DECIMALS),
          };
          break;
        default:
          throw new Error("Unexpected event typename");
      }

      const tokenTx: TokenTx = {
        txHash,
        date: new Date(event.createdAt),
        eventData,
      };

      txs.push(tokenTx);
    }

    return txs;
  }

  public async checkSignature(): Promise<boolean> {
    const signerAddr = await this.signer.getAddress();
    const nonce = uuidv4();
    const msg =
      "Welcome to Metaforce UniteVerse!\n\n" +
      "Click to sign in and accept the Metaforce Terms of Service: https://holiverse.ai/terms\n\n" +
      "This request will not trigger a blockchain transaction or cost any gas fees.\n\n" +
      "Your authentication status will reset after 24 hours.\n\n" +
      "Wallet address:\n" +
      `${signerAddr}\n\n` +
      "Nonce:\n" +
      `${nonce}`;

    try {
      const sig = await this.signer.signMessage(msg);
      const msgSignerAddr = ethers.utils.verifyMessage(msg, sig);

      return signerAddr === msgSignerAddr;
    } catch {
      return false;
    }
  }

  public async getStats(): Promise<Stats> {
    const { core } = await this.getContracts();
    const target = core.address;

    const inputs = [
      {
        target,
        function: "getNowPriceFirstPackInUSD",
      },
      {
        target,
        function: "getPriceMFSInUSD",
      },
      {
        target,
        function: "totalEmissionMFS",
      },
      {
        target,
        function: "getWorkflowStage",
      },
      {
        target,
        function: "nowNumberBigBlock",
      },
      {
        target,
        function: "endBigBlock",
      },
      {
        target,
        function: "nowNumberSmallBlock",
      },
      {
        target,
        function: "endSmallBlock",
      },
    ];
    const [, parameters] = await this.multi.multiCall(
      Core__factory.createInterface(),
      inputs
    );

    return {
      firstPackPriceInUSD: ethers.utils.formatUnits(parameters[0], DECIMALS),
      mfsPriceInUSD: ethers.utils.formatUnits(parameters[1], DECIMALS),
      mfsTotalEmission: ethers.utils.formatUnits(parameters[2], DECIMALS),
      workflowStage: parameters[3],
      bigBlockNumber: parameters[4],
      endBigBlockEmission: ethers.utils.formatUnits(parameters[5], DECIMALS),
      smallBlockNumber: parameters[6],
      endSmallBlockEmission: ethers.utils.formatUnits(parameters[7], DECIMALS),
      usersCount: await this.getUsersCount(),
      totalRevenue: await this.getTotalRevenueInUSD(),
    };
  }

  public async getUserAddress(): Promise<string> {
    let address: string;
    if (~document.cookie.indexOf("customUser")) {
      const cookiesArr = document.cookie.split(";");
      address = cookiesArr
        .find((cookie) => ~cookie.indexOf("customUser"))
        ?.split("=")[1] as string;
      console.warn("Override user address to ", address);
    } else {
      address = await this.signer.getAddress();
    }
    return address;
  }

  public async getUserID(address?: string): Promise<number> {
    const { metaCore } = await this.getContracts();
    if (address == null) {
      address = await this.getUserAddress();
    }

    return (await metaCore.checkRegistration(address)).toNumber();
  }

  public async getUserInfo(idUser?: number): Promise<UserInfo> {
    const { core, metaCore } = await this.getContracts();
    const target = core.address;

    const userId = idUser || (await this.getUserID());
    const userAddress = await metaCore.getUserAddress(userId);
    const nickName = await metaCore.getAlias(userId);
    const inputs = [
      // {
      //   target,
      //   function: "getTypeReward",
      //   args: [userId],
      // },
      {
        target,
        function: "getUserLevel",
        args: [userId],
      },
      {
        target,
        function: "getRegistrationDate",
        args: [userId],
      },
    ];

    const [, parameters] = await this.multi.multiCall(
      Core__factory.createInterface(),
      inputs
    );

    return {
      address: userAddress,
      rewardType: RewardType.Mfs, // parameters[0],
      level: parameters[0].toNumber(),
      registeredAt: new Date(parameters[1] * 1000),
      nickName: nickName,
    };
  }

  public async getPacksFromSubsquid(idUser?: number): Promise<Pack[]> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const query = await this.genUsersPacks(userId);
    const answer = await this.getJSONFromSubSquid(query);
    const packs: Pack[] = [];
    for (let i = 0; i < answer.data.packs.length; i++) {
      const timeStampEndPack = new Date(answer.data.packs[i].expiresAt);
      const isActive = new Date().getTime() < timeStampEndPack.getTime();

      packs.push({ timeStampEndPack, isActive });
    }
    return packs;
  }

  public async getPacks(idUser?: number): Promise<Pack[]> {
    const { metaForce, metaCore, core } = await this.getContracts();
    const target = core.address;
    const userId = idUser || (await this.getUserID());
    const { level } = await this.getUserInfo(userId);

    let inputs = range(1, level + 1).map((lvl) => ({
      target,
      function: "getTimestampEndPack",
      args: [userId, lvl],
    }));
    const [, packs] = await this.multi.multiCall(
      Core__factory.createInterface(),
      inputs
    );

    inputs = range(1, level + 1).map((lvl) => ({
      target,
      function: "isPackActive",
      args: [userId, lvl],
    }));
    const [, states] = await this.multi.multiCall(
      Core__factory.createInterface(),
      inputs
    );

    inputs = range(1, LEVELS_COUNT + 1).map((lvl) => ({
      target: metaForce.address,
      interface: MetaForce__factory.abi,
      function: "countRenewal",
      args: [userId, lvl],
    }));
    const [, contsRenewal] = await this.multi.multiCall(
      Core__factory.createInterface(),
      inputs
    );

    return packs.map((activeUntil, i) => ({
      isActive: states[i],
      timeStampEndPack: new Date(
        (activeUntil.gt(MAX_TIMESTAMP) ? MAX_TIMESTAMP : activeUntil) * 1000
      ),
      countRenewal: contsRenewal[i],
    }));
  }

  public async getPackStatusAndPrice(
    level: number,
    idUser?: number
  ): Promise<{ isActive: boolean; price: string }> {
    const { metaCore, core, metaForce } = await this.getContracts();
    const userId = idUser || (await this.getUserID());

    const isActive = await core.isPackActive(userId, level);
    let price;
    if (isActive) {
      const priceRenewArr = await metaForce.calcNeedMFSForRenew(
        userId,
        level,
        1
      );
      const priceRenew = priceRenewArr[0].add(priceRenewArr[1]);
      price = priceRenew;
    } else {
      const priceActivate = (await core.getNowPriceFirstPackInMFS()).mul(
        Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1)
      );
      price = priceActivate;
    }

    return {
      isActive,
      price: ethers.utils.formatUnits(price, DECIMALS),
    };
  }

  public async getRevenueStable(
    timeInterval: string,
    amountDiv: number,
    idUser?: number
  ): Promise<string[]> {
    const { metaCore } = await this.getContracts();
    const arrCoin = new Array(amountDiv);
    const userId = idUser || (await this.getUserID());
    const answer = await this.getJSONFromSubSquid(
      await this.genRevenueStableQuery(userId, timeInterval, amountDiv)
    );
    for (let i = 0; i < amountDiv; i++) {
      arrCoin[i] = ethers.utils.formatUnits(
        answer.data.revenueStable[i].revenue,
        DECIMALS
      );
    }
    return arrCoin;
  }

  public async getRevenueMFS(
    timeInterval: string,
    amountDiv: number,
    idUser?: number
  ): Promise<string[]> {
    const { metaCore } = await this.getContracts();
    const arrCoin = new Array(amountDiv);
    const userId = idUser || (await this.getUserID());
    const answer = await this.getJSONFromSubSquid(
      await this.genRevenueMFSQuery(userId, timeInterval, amountDiv)
    );
    for (let i = 0; i < amountDiv; i++) {
      arrCoin[i] = ethers.utils.formatUnits(
        answer.data.revenueMFS[i].revenue,
        DECIMALS
      );
    }
    return arrCoin;
  }

  public async getDirectReferalPage(
    sizePage: number,
    numberPage: number,
    idUser?: number
  ): Promise<ReferralUserInfo[]> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const userArray = new Array<ReferralUserInfo>(sizePage);
    const referalsIds = await metaCore.getReferralPage(
      userId,
      sizePage,
      numberPage
    );
    for (let i = 0; i < referalsIds.length; i++) {
      if (referalsIds[i]!.toNumber() == 0) {
        break;
      }
      userArray[i] = await this.getDirectReferalUserInfo(
        await referalsIds[i]!.toNumber()
      );
    }
    return userArray;
  }

  public async getDirectReferalUserInfo(
    idUser?: number
  ): Promise<ReferralUserInfo> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const avatar = await this.getAvatar(userId);
    const alias = await metaCore.getAlias(userId);
    const referrerId = (await metaCore.getReferrer(userId)).toNumber();
    const referralsAmount = (
      await metaCore.getReferralAmount(userId)
    ).toNumber();
    return {
      userId: userId,
      avatar: avatar,
      alias: alias,
      referrerId: referrerId,
      referralsAmount: referralsAmount,
    };
  }

  public async getUsersInfoInMarketingBinaryTree(
    levelStart: number,
    levelEnd: number,
    idUser?: number
  ): Promise<MarketingUserForBinary[]> {
    const { metaCore } = await this.getContracts();

    const userId = idUser || (await this.getUserID());
    const answer = await this.getJSONFromSubSquid(
      await this.genMarketingBinaryTreeQuery(userId, 0, levelStart, levelEnd)
    );
    return answer.data.marketingTree;
  }

  public async getUsersInfoInMarketingLevelTree(
    pack: number,
    levelStart: number,
    levelEnd: number,
    idUser?: number
  ): Promise<MarketingUserForLevel[]> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const answer = await this.getJSONFromSubSquid(
      await this.genMarketingLevelTreeQuery(userId, pack, levelStart, levelEnd)
    );
    return answer.data.marketingTree;
  }

  public async getCountHolders(): Promise<number> {
    const answer = await this.getJSONFromSubSquid(await this.genCountHolders());
    return answer.data.mfsTotalSupply.holders;
  }

  public async getAvatar(userId: number): Promise<string> {
    const src =
      DO_SPACES.URL +
      DO_SPACES.AVATARS_FOLDER +
      "/" +
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes(userId.toString())) +
      DO_SPACES.IMG_FORMAT;

    return src;
  }

  public async getLostStableCoin(
    timeInterval: string,
    idUser?: number
  ): Promise<string> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const answer = await this.getJSONFromSubSquid(
      await this.genLostQuery(userId, timeInterval, 1)
    );
    const value = ethers.utils.formatUnits(
      answer.data.lostMoney[0].revenue,
      DECIMALS
    );
    return value;
  }

  public async getDepositIds(idUser?: number): Promise<number[]> {
    const { holding, metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());

    const depositIds = await holding.getDepositIds(userId);

    return depositIds.map((id) => id.toNumber());
  }

  public async getDeposit(id: number): Promise<Deposit> {
    const { holding } = await this.getContracts();

    const { holderId, unholdingAllowed, entryLevel, amount, createdAt } =
      await holding.getDeposit(id);

    return {
      holderId: holderId.toNumber(),
      unholdingAllowed,
      entryLevel: entryLevel.toNumber(),
      amount: ethers.utils.formatUnits(amount, DECIMALS),
      createdAt: new Date(createdAt * 1000),
    };
  }

  public async getOutHMFSLevelFromDeposit(id: number): Promise<number> {
    const { holding } = await this.getContracts();
    const level = await holding.getOutHMFSLevelFromDeposit(id);

    return level.toNumber();
  }

  public async getQueue(
    pageSize: number,
    pageNumber: number
  ): Promise<number[]> {
    const { request } = await this.getContracts();
    const q = await request.getRequestIdsFromQueue(pageSize, pageNumber);
    return q.map((id) => id.toNumber());
  }

  public async getRequestIds(idUser?: number): Promise<number[]> {
    const { request, metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());

    const ids = await request.getRequestsIdsForUser(userId);

    return ids.map((id) => id.toNumber());
  }

  public async getRequest(id: number): Promise<MfsRequest> {
    const { request } = await this.getContracts();
    const target = request.address;

    const inputs = [
      {
        target,
        function: "requests",
        args: [id],
      },
      {
        target,
        function: "requestInQueue",
        args: [id],
      },
      {
        target,
        function: "getNumberInQueue",
        args: [id],
      },
    ];
    const [, response] = await this.multi.multiCall(
      Request__factory.createInterface(),
      inputs
    );

    return {
      requester: response[0]["requesterId"],
      usdAmount: ethers.utils.formatUnits(response[0]["amountUSD"], DECIMALS),
      startUSDAmount: ethers.utils.formatUnits(
        response[0]["startAmountUSD"],
        DECIMALS
      ),
      buyedMFS: ethers.utils.formatUnits(response[0]["buyedMFS"], DECIMALS),
      spentUSD: ethers.utils.formatUnits(response[0]["spentUSD"], DECIMALS),
      status: response[0]["status"],
      priority: response[1]["level"],
      placeInQueue: response[2].toNumber(),
    };
  }

  public async getBalancesOnWallet(account?: string): Promise<Balances> {
    const { mfs, stablecoin, hMfs, energy, eqn, qen, qre } =
      await this.getContracts();
    const address = account || (await this.signer.getAddress());

    const inputs = [
      {
        target: mfs.address,
        function: "balanceOf",
        args: [address],
      },
      {
        target: stablecoin.address,
        function: "balanceOf",
        args: [address],
      },
      {
        target: energy.address,
        function: "balanceOf",
        args: [address],
      },
      {
        target: eqn.address,
        function: "balanceOf",
        args: [address],
      },
      {
        target: qen.address,
        function: "balanceOf",
        args: [address],
      },
      {
        target: qre.address,
        function: "balanceOf",
        args: [address],
      },
      ...hMfs.map((t) => ({
        target: t.address,
        function: "balanceOf",
        args: [address],
      })),
    ];
    const [, balances] = await this.multi.multiCall(
      Erc20__factory.createInterface(),
      inputs
    );

    return {
      mfs: ethers.utils.formatUnits(balances[0], DECIMALS),
      stablecoin: ethers.utils.formatUnits(balances[1], DECIMALS),
      energy: ethers.utils.formatUnits(balances[2], DECIMALS),
      hMfs: balances.slice(3).map((b) => ethers.utils.formatUnits(b, DECIMALS)),
      mfsVesting: ethers.utils.formatUnits("0", DECIMALS),
      eqn: ethers.utils.formatUnits("0", DECIMALS),
      qen: ethers.utils.formatUnits("0", DECIMALS),
      qre: ethers.utils.formatUnits("0", DECIMALS),
    };
  }

  public async getBalancesOnPayment(idUser?: number): Promise<Balances> {
    const {
      mfs,
      eqn,
      qen,
      qre,
      stablecoin,
      hMfs,
      energy,
      metaPayment,
      metaCore,
    } = await this.getContracts();
    const userId = idUser || (await this.getUserID());

    const target = metaPayment.address;
    const inputs = [
      {
        target,
        function: "getBalance",
        args: [mfs.address, userId],
      },
      {
        target,
        function: "getBalance",
        args: [stablecoin.address, userId],
      },
      {
        target,
        function: "getBalance",
        args: [energy.address, userId],
      },
      {
        target,
        function: "getUserVestingLockedAmount",
        args: [mfs.address, userId],
      },
      {
        target,
        function: "getBalance",
        args: [eqn.address, userId],
      },
      {
        target,
        function: "getBalance",
        args: [qen.address, userId],
      },
      {
        target,
        function: "getBalance",
        args: [qre.address, userId],
      },
      ...hMfs.map((t) => ({
        target,
        function: "getBalance",
        args: [t.address, userId],
      })),
    ];
    const [, balances] = await this.multi.multiCall(
      MetaPayment__factory.createInterface(),
      inputs
    );

    return {
      mfs: ethers.utils.formatUnits(balances[0], DECIMALS),
      stablecoin: ethers.utils.formatUnits(balances[1], DECIMALS),
      energy: ethers.utils.formatUnits(balances[2], DECIMALS),
      mfsVesting: ethers.utils.formatUnits(balances[3], DECIMALS),
      eqn: ethers.utils.formatUnits(balances[4], DECIMALS),
      qen: ethers.utils.formatUnits(balances[5], DECIMALS),
      qre: ethers.utils.formatUnits(balances[6], DECIMALS),
      hMfs: balances.slice(7).map((b) => ethers.utils.formatUnits(b, DECIMALS)),
    };
  }

  public async getUserActivityFactor(): Promise<any> {
    const { quantumWave } = await this.getContracts();

    const eqnAmountToExtendOneShare = ethers.utils.formatUnits(
      await quantumWave.eqnAmountToExtendOneShare(),
      DECIMALS
    );
    const qenAmountToFillOneShare = ethers.utils.formatUnits(
      await quantumWave.eqnAmountToExtendOneShare(),
      DECIMALS
    );

    return { eqnAmountToExtendOneShare, qenAmountToFillOneShare };
  }

  public async getRecentActivity(
    pageSize: number,
    pageNumber: number,
    idUser?: number
  ): Promise<Event[]> {
    const { metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const query = await this.genRecentActivityQuery(
      pageSize,
      pageNumber,
      userId
    );
    const answer = await this.getJSONFromSubSquid(query);
    const events: Event[] = [];

    for (let i = 0; i < answer.data.users[0].events.length; i++) {
      const contract = answer.data.users[0].events[0].contract;
      const eventDate = answer.data.users[0].events[i].createdAt;
      let eventName = answer.data.users[0].events[i].event.__typename;
      let eventUserID;
      let eventValue = "";
      let eventAmount = "";
      switch (answer.data.users[0].events[i].event.__typename) {
        case "MFCTokensMFSIsBuyingInOffer":
          eventUserID = idUser;
          eventName = "GetedForceCoin";
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = "";
          break;
        case "MFCPackIsActivated":
          eventUserID = idUser;
          eventName = "TierActivated";
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = answer.data.users[0].events[i].event.level;
          break;
        case "MFCPackIsRenewed":
          eventUserID = idUser;
          eventName = "TierExtended";
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = answer.data.users[0].events[i].event.level;
          break;
        case "Registration":
          eventUserID = answer.data.users[0].events[i].event.referral.id;
          eventName = "NewReferral";
          eventAmount = "";
          eventValue = "";
          break;
        case "MarketingReferrerChanged":
          eventUserID = answer.data.users[0].events[i].event.accountId.id;
          eventName = "DeltaActivation";
          eventAmount = "";
          eventValue = "";
          break;
        case "RevenueMFS":
          eventUserID = answer.data.users[0].events[i].event.from.id;
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = answer.data.users[0].events[i].event.level;
          if (answer.data.users[0].events[i].event.activation) {
            if (answer.data.users[0].events[i].event.marketing) {
              eventName = "MarketingRevenueMFSForActivatedTier";
            } else {
              eventName = "ReferralRevenueMFSForActivatedTier";
            }
          } else {
            if (answer.data.users[0].events[i].event.marketing) {
              eventName = "MarketingRevenueMFSForRenewTier";
            } else {
              eventName = "ReferralRevenueMFSForRenewTier";
            }
          }
          break;
        case "RevenueStable":
          eventUserID = answer.data.users[0].events[i].event.from.id;
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = answer.data.users[0].events[i].event.level;
          if (answer.data.users[0].events[i].event.activation) {
            if (answer.data.users[0].events[i].event.marketing) {
              eventName = "MarketingRevenueStableForActivatedTier";
            } else {
              eventName = "ReferralRevenueStableForActivatedTier";
            }
          } else {
            if (answer.data.users[0].events[i].event.marketing) {
              eventName = "MarketingRevenueStableForRenewTier";
            } else {
              eventName = "ReferralRevenueStableForRenewTier";
            }
          }
          break;
        case "LostMoney":
          eventUserID = answer.data.users[0].events[i].event.from.id;
          eventAmount = ethers.utils.formatUnits(
            answer.data.users[0].events[i].event.amount,
            DECIMALS
          );
          eventValue = answer.data.users[0].events[i].event.level;
          if (answer.data.users[0].events[i].event.marketing) {
            eventName = "MarketingLostMoney";
          } else {
            eventName = "ReferralLostMoney";
          }
          break;
      }

      events.push({
        contract: contract,
        userId: eventUserID,
        name: eventName,
        date: eventDate,
        value: eventValue,
        amount: eventAmount,
      });
    }
    return events;
  }

  public async getUnitedVerseContractsAddresses(): Promise<string[]> {
    const contracts: string[] = [];
    const { metaForce, core, request, registry, holding } =
      await this.getContracts();
    contracts.push(metaForce.address);
    contracts.push(core.address);
    contracts.push(request.address);
    contracts.push(registry.address);
    contracts.push(holding.address);
    return contracts;
  }

  public async getAddressesTokens(): Promise<Tokens> {
    const { mfs, stablecoin, energy, hMfs } = await this.getContracts();
    return {
      mfs: mfs.address,
      mfsVesting: mfs.address,
      stablecoin: stablecoin.address,
      energy: energy.address,
      hMfs: hMfs.map((a) => a.address),
    };
  }

  public async getPercentAirdrop(idUser?: number): Promise<string> {
    const { request, metaCore, core } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const userLevel = await core.getUserLevel(userId);
    const percent = parseFloat(
      ethers.utils.formatUnits(
        await request.airdropPoolCoeffs(userLevel.toNumber() - 1),
        18
      )
    );
    return percent.toString();
  }

  public async getFlagRenewedForVestingMFS(
    level: number,
    idUser?: number
  ): Promise<boolean> {
    const { metaCore, metaForce } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const flag = await metaForce.checkStatusRenewedPackForVestingMFS(
      userId,
      level
    );
    return flag;
  }

  public async activationPack(
    level: number,
    amount: number,
    forMFS: boolean
  ): Promise<void> {
    console.log("activationPack", level, amount, forMFS);
    const { metaForce, metaCore, core, metaPayment, stablecoin, mfs } =
      await this.getContracts();
    const userId = await this.getUserID();

    // Проверяем достаточно ли DAI на иннер балаенсе или на баланесе пользователя
    const pricePackInUSD = FIRST_PACK_PRICE_IN_USD.mul(
      Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1)
    );
    const needStable = pricePackInUSD.mul(amount); // .add(priceBuyingMFSInUSD);
    console.log("needStable", needStable.toString());
    if (!forMFS) {
      const balanceOnPayment = await metaPayment.getBalance(
        stablecoin.address,
        userId
      );
      const pricePackInUSD = FIRST_PACK_PRICE_IN_USD.mul(
        Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1)
      );
      const needStable = pricePackInUSD.mul(amount); // .add(priceBuyingMFSInUSD);
      if (needStable.gt(balanceOnPayment)) {
        try {
          await this.approveCoin(
            metaPayment.address,
            stablecoin.address,
            needStable
          );
        } catch (e: any) {
          throw e.reason;
        }
      }
    } else {
      console.log("activate for mfs");
      const balanceOnPayment = await metaPayment.getBalance(
        mfs.address,
        userId
      );

      const pricePackInMFS = (await core.getNowPriceFirstPackInMFS()).mul(
        Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1)
      );
      console.log(pricePackInMFS);
      const needMFS = pricePackInMFS.mul(amount).mul(105).div(100); // .add(priceBuyingMFSInUSD);
      console.log("balanceOnPayment ", balanceOnPayment);
      console.log("pricePackInMFS ", pricePackInMFS);
      console.log("needMFS ", needMFS);
      if (needMFS.gt(balanceOnPayment)) {
        try {
          await this.approveCoin(metaPayment.address, mfs.address, needMFS);
        } catch (e: any) {
          throw e.reason;
        }
      }
    }
    //* апрув в мфс
    const divider = BigNumber.from("1000000000000000000");
    const priceInMfs = await core.getPriceMFSInUSD();
    const needMfs = needStable.mul(divider).div(priceInMfs);
    const needMfsWithReserve = needMfs.mul(110).div(100);

    const mfsBalanceOnPayment = await metaPayment.getBalance(
      mfs.address,
      userId
    );
    if (needMfsWithReserve.gt(mfsBalanceOnPayment)) {
      try {
        await this.approveCoin(
          metaPayment.address,
          mfs.address,
          needMfsWithReserve
        );
      } catch (e: any) {
        throw e.reason;
      }
    }
    // * закончен апрув

    let tx;
    if (level == 1) {
      if (!(await core.checkRegistrationInMarketing(userId))) {
        let referrerId = BigNumber.from(userId);
        while (!(await core.checkRegistrationInMarketing(referrerId))) {
          referrerId = await metaCore.getReferrer(referrerId);
        }
        const { freePlace, replace } = (
          await this.getJSONFromSubSquid(
            await this.genFreePlaceQuery(referrerId.toNumber())
          )
        ).data.freePlace;
        const _freePlace = Number(freePlace);
        if (replace) {
          try {
            const estimation =
              await metaForce.estimateGas.firstActivationPackWithReplace(
                freePlace,
                amount,
                forMFS
              );
            tx = await metaForce.firstActivationPackWithReplace(
              freePlace,
              amount,
              forMFS,
              {
                gasLimit: estimation.mul(3),
              }
            );
          } catch (e: any) {
            // this.callbackFn(false);
            throw e.reason;
          }
          // this.callbackFn(true);
        } else {
          let realFreePlace;
          if (freePlace == null) {
            const referrer = [referrerId];
            realFreePlace = await core.getFreePlace(referrer);
          } else {
            const referrer = [_freePlace];
            realFreePlace = await core.getFreePlace(referrer);
          }
          try {
            const estimation = await metaForce.estimateGas.firstActivationPack(
              realFreePlace,
              amount,
              forMFS
            );
            tx = await metaForce.firstActivationPack(
              realFreePlace,
              amount,
              forMFS,
              {
                gasLimit: estimation.mul(3),
              }
            );
          } catch (e: any) {
            // this.callbackFn(false);
            throw e.reason;
          }
          // this.callbackFn(true);
        }
        await tx.wait();
        return;
      }
    }
    try {
      const estimation = await metaForce.estimateGas.activationPack(
        level,
        amount,
        forMFS
      );
      console.log("metaForce.activationPack");
      tx = await metaForce.activationPack(level, amount, forMFS, {
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      console.log(
        "error 2222",
        JSON.stringify(e, Object.getOwnPropertyNames(e))
      );
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async renewPackForMFS(
    level: number,
    amount: number,
    forMFS: boolean
  ): Promise<void> {
    const { metaForce, metaPayment, metaCore, core, stablecoin, mfs } =
      await this.getContracts();
    const account = await this.signer.getAddress();
    const userId = await this.getUserID();
    try {
      // Проверяем достаточно ли DAI на иннер балаенсе или на баланесе пользователя
      const pricePackInUSD = FIRST_PACK_PRICE_IN_USD.mul(21)
        .div(100)
        .mul(Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1));
      const needStable = pricePackInUSD.mul(amount); // .add(priceBuyingMFSInUSD);
      if (!forMFS) {
        const balanceOnPayment = await metaPayment.getBalance(
          stablecoin.address,
          userId
        );
        if (needStable.gt(balanceOnPayment)) {
          try {
            await this.approveCoin(
              metaPayment.address,
              stablecoin.address,
              needStable
            );
          } catch (e: any) {
            throw e.reason;
          }
        }
      }
      
      //* апрув в мфс
      const divider = BigNumber.from("1000000000000000000");
      const priceInMfs = await core.getPriceMFSInUSD();
      const needMfs = needStable.mul(divider).div(priceInMfs);
      const needMfsWithReserve = needMfs.mul(110).div(100);

      const mfsBalanceOnPayment = await metaPayment.getBalance(
        mfs.address,
        userId
      );
      if (needMfsWithReserve.gt(mfsBalanceOnPayment)) {
        try {
          await this.approveCoin(
            metaPayment.address,
            mfs.address,
            needMfsWithReserve
          );
        } catch (e: any) {
          throw e.reason;
        }
      }
      // * закончен апрув

      const estimation = await metaForce.estimateGas.renewalPackForMFS(
        level,
        amount,
        forMFS
      );
      const tx = await metaForce.renewalPackForMFS(level, amount, forMFS, {
        gasLimit: estimation.mul(3),
      });
      // this.callbackFn(true);
      await tx.wait();
    } catch (e: any) {
      console.log("error occured", e);
      // this.callbackFn(false);
      throw e.reason ?? e.message ?? e;
    }
  }

  public async renewPackForVestingMFS(level: number): Promise<void> {
    const { metaForce } = await this.getContracts();
    try {
      const estimation = await metaForce.estimateGas.renewalPackForVestingMFS(
        level
      );
      const tx = await metaForce.renewalPackForVestingMFS(level, {
        gasLimit: estimation.mul(3),
      });
      // this.callbackFn(true);
      await tx.wait();
    } catch (e: any) {
      throw e.reason ?? e.message ?? e;
    }
  }

  public async renewPackForSetHMFS(
    level: number,
    amount: number,
    amountsHMFS: string[]
  ): Promise<void> {
    const { metaForce } = await this.getContracts();
    const parseAmountsHMFS = new Array(amountsHMFS.length);
    for (let i = 0; i < amountsHMFS.length; i++) {
      parseAmountsHMFS[i] = ethers.utils.parseUnits(amountsHMFS[i]!, DECIMALS);
    }
    const estimation = await metaForce.estimateGas.renewalPack(
      level,
      amount,
      parseAmountsHMFS
    );
    let tx;
    try {
      tx = await metaForce.renewalPack(level, amount, parseAmountsHMFS, {
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async createRequestMfs(usdAmount: string): Promise<number> {
    const { metaPayment, stablecoin, request } = await this.getContracts();
    const amountNumber = ethers.utils.parseUnits(usdAmount, DECIMALS);
    await this.approveCoinDeprecated(
      metaPayment.address,
      stablecoin.address,
      amountNumber
    );
    const idDistribution = await request.callStatic.createRequestMFS(
      amountNumber
    );
    let tx;
    try {
      tx = await request.createRequestMFS(amountNumber);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
    return idDistribution.toNumber();
  }

  public async deleteRequestMfs(requestId: number): Promise<void> {
    const { request } = await this.getContracts();
    let tx;
    try {
      tx = await request.deleteRequestMFS(requestId);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async hold(level: number, amount: string): Promise<void> {
    const { holding, metaCore, metaPayment, hMfs } = await this.getContracts();
    const userId = await this.getUserID();
    const a = ethers.utils.parseUnits(amount, DECIMALS);

    if (level > 0) {
      const hMFS = hMfs[level - 1]!;
      const balanceOnPayment = await metaPayment.getBalance(
        hMFS.address,
        userId
      );
      if (a.gt(balanceOnPayment)) {
        await this.approveCoinDeprecated(
          metaPayment.address,
          hMFS.address,
          a.sub(balanceOnPayment)
        );
      }
    }

    let tx;
    try {
      tx = await holding.hold(level, a);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async unhold(depositId: number): Promise<void> {
    const { holding } = await this.getContracts();
    let tx;
    try {
      const { amount } = await holding.getDeposit(depositId);
      tx = await holding.withdraw(depositId, amount);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async withdrawHMFS(depositId: number, amount: string): Promise<void> {
    const { holding } = await this.getContracts();
    let tx;
    try {
      tx = await holding.withdraw(
        depositId,
        ethers.utils.parseUnits(amount, DECIMALS)
      );
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async convertHMFSToMFS(level: number, amount: string): Promise<void> {
    const { holding, metaCore, metaPayment, hMfs } = await this.getContracts();
    const userId = await this.getUserID();
    const a = ethers.utils.parseUnits(amount, DECIMALS);

    const hMFS = hMfs[level - 1]!;
    const balanceOnPayment = await metaPayment.getBalance(hMFS.address, userId);
    if (a.gt(balanceOnPayment)) {
      await this.approveCoinDeprecated(
        metaPayment.address,
        hMFS.address,
        a.sub(balanceOnPayment)
      );
    }

    let tx;
    try {
      tx = await holding.hMFSToMFS(level, a);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async addToPayment(erc20: string, amount: string): Promise<void> {
    const { metaPayment } = await this.getContracts();
    const a = ethers.utils.parseUnits(amount, DECIMALS);
    await this.approveCoinDeprecated(metaPayment.address, erc20, a);
    let tx;
    try {
      tx = await metaPayment.add(erc20, a);
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait();
  }

  public async getBalanceInPayment(
    erc20: string,
    idUser?: number
  ): Promise<string> {
    const { metaPayment, metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const balance = await metaPayment.getBalance(erc20, userId);
    return ethers.utils.formatUnits(balance, DECIMALS);
  }

  public async approveCoinDeprecated(
    to: string,
    erc20: string,
    amount?: ethers.BigNumber
  ): Promise<void> {
    const coin = Erc20__factory.connect(erc20, this.signer);
    const account = await this.signer.getAddress();
    const a = amount ? amount.add(ONE) : ethers.constants.MaxUint256;
    const approvedAmount = await coin.allowance(account, to);
    if (a.gt(approvedAmount)) {
      const estimation = await coin.estimateGas.approve(to, a);
      let tx;
      try {
        tx = await coin.approve(to, a, {
          gasLimit: estimation.mul(2),
        });
      } catch (e: any) {
        // this.callbackFn(false);
        throw e.reason;
      }
      // this.callbackFn(true);
      await tx.wait();
    }
  }

  public async approveCoin(
    to: string,
    erc20: string,
    amount?: ethers.BigNumber
  ): Promise<void> {
    const coin = Erc20__factory.connect(erc20, this.signer);
    const account = await this.signer.getAddress();
    const a = amount ? amount.add(ONE) : ethers.constants.MaxUint256;
    const approvedAmount = await coin.allowance(account, to);
    if (a.gt(approvedAmount)) {
      const estimation = await coin.estimateGas.approve(to, a);
      const tx = await coin.approve(to, a, {
        gasLimit: estimation.mul(2),
      });
      await tx.wait();
    }
    return;
  }

  public async calcMFSInUSD(amountMFS: string): Promise<string> {
    const { core } = await this.getContracts();
    const price = await core.calcUSDAmountForMFS(
      ethers.utils.parseUnits(amountMFS, DECIMALS)
    );
    return ethers.utils.formatUnits(price, DECIMALS);
  }

  public async calcUSDInMFS(amountUSD: string): Promise<string> {
    const { core } = await this.getContracts();
    const price = await core.calcMFSAmountForUSD(
      ethers.utils.parseUnits(amountUSD, DECIMALS)
    );
    return ethers.utils.formatUnits(price, DECIMALS);
  }

  public async checkGasEnoughForActivation(
    level: number,
    amount: number,
    forMFS: boolean,
    idUser?: number
  ): Promise<EnoughMatic> {
    let estimation = ethers.utils.parseEther("0");
    const { metaForce, metaCore, core } = await this.getContracts();
    const account = await this.signer.getAddress();
    const userId = idUser || (await this.getUserID());
    if (level == 1) {
      if (!(await core.checkRegistrationInMarketing(userId))) {
        let referrerId = userId;
        while (!(await core.checkRegistrationInMarketing(referrerId))) {
          referrerId = (await metaCore.getReferrer(referrerId)).toNumber();
        }
        const { freePlace, replace } = (
          await this.getJSONFromSubSquid(
            await this.genFreePlaceQuery(referrerId)
          )
        ).data.freePlace;
        const _freePlace = Number(freePlace);
        if (replace) {
          estimation =
            await metaForce.estimateGas.firstActivationPackWithReplace(
              _freePlace,
              amount,
              forMFS
            );
        } else {
          let realFreePlace;
          if (_freePlace == null) {
            const referrer = [referrerId];
            realFreePlace = await core.getFreePlace(referrer);
          } else {
            const referrer = [_freePlace];
            realFreePlace = await core.getFreePlace(referrer);
          }
          estimation = await metaForce.estimateGas.firstActivationPack(
            realFreePlace,
            amount,
            forMFS
          );
        }
      }
    } else {
      estimation = await metaForce.estimateGas.activationPack(
        level,
        amount,
        forMFS
      );
    }
    const gazPrice = await this.provider.getGasPrice();
    const bl = await this.provider.getBalance(account);
    const needMatic = estimation.mul(gazPrice).mul(13).div(10);
    return {
      enough: bl.gte(needMatic),
      maticBalance: ethers.utils.formatUnits(bl, DECIMALS),
    };
  }

  // public async checkGasEnoughForRenew(
  //   level: number,
  //   amount: number,
  //   amountMFSForBuying: string,
  //   idUser?: number
  // ): Promise<EnoughMatic> {
  //   let estimation = ethers.utils.parseEther('0');
  //   const { metaForce, metaCore, core, metaPayment, mfs, stablecoin } =
  //     await this.getContracts();
  //   const priceFirstack = await core.getNowPriceFirstPackInMFS();
  //   const pricePackInMFS = priceFirstack.mul(
  //     Math.pow(COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL, level - 1)
  //   );
  //   const priceRenewPackInMFS = pricePackInMFS.div(
  //     ACTIVATION_COST_RATIO_TO_RENEWAL
  //   );
  //   let parsedAmountMFS = ethers.utils.parseUnits(amountMFSForBuying, DECIMALS);
  //   if (parsedAmountMFS.gt(priceRenewPackInMFS)) {
  //     parsedAmountMFS = priceRenewPackInMFS;
  //   }
  //   const account = await this.signer.getAddress();
  //   const userId = idUser || await this.getUserID();
  //   const balanceOnPayment = await metaPayment.getBalance(mfs.address, userId);
  //   if (priceRenewPackInMFS.gt(balanceOnPayment)) {
  //     await this.approveCoinDeprecated(
  //       metaPayment.address,
  //       mfs.address,
  //       priceRenewPackInMFS
  //     );
  //   }
  //   const balanceOnPaymentStable = await metaPayment.getBalance(
  //     stablecoin.address,
  //     userId
  //   );
  //   const needStable = await core.calcUSDAmountForMFS(parsedAmountMFS);
  //   if (needStable.gt(balanceOnPaymentStable)) {
  //     await this.approveCoinDeprecated(
  //       metaPayment.address,
  //       stablecoin.address,
  //       needStable
  //     );
  //   }

  //   estimation = await metaForce.estimateGas.renewalPackForMFS(level, amount);
  //   const gazPrice = await this.provider.getGasPrice();
  //   const bl = await this.provider.getBalance(account);
  //   const needMatic = estimation.mul(gazPrice).mul(13).div(10);
  //   return {
  //     enough: bl.gte(needMatic),
  //     maticBalance: ethers.utils.formatUnits(bl, DECIMALS),
  //   };
  // }

  public async getRequestedMFS(
    amountUSD: string,
    idUser?: number
  ): Promise<RequestedMFS> {
    const { core, metaCore } = await this.getContracts();
    const userId = idUser || (await this.getUserID());
    const airdropPercent = parseFloat(await this.getPercentAirdrop(userId));
    const total =
      parseFloat(
        ethers.utils.formatUnits(
          ethers.utils.parseUnits(amountUSD, DECIMALS),
          DECIMALS
        )
      ) /
      parseFloat(
        ethers.utils.formatUnits(await core.getPriceMFSInUSD(), DECIMALS)
      );
    const airdrop = total * airdropPercent;
    const self = total * (1 - airdropPercent);
    return {
      total: total.toString(),
      airdrop: airdrop.toString(),
      self: self.toString(),
    };
  }

  public async getUsersCount(): Promise<string> {
    const usersCount = (
      await this.getJSONFromSubSquid(await this.genUsersCount())
    ).data.usersConnection.totalCount;
    return usersCount.toString();
  }

  public async getTotalRevenueInUSD(userId?: number): Promise<string> {
    const { core } = await this.getContracts();
    const { mfsRevenue, stableRevenue } = (
      await this.getJSONFromSubSquid(await this.genTotalRevenue(userId))
    ).data.totalRevenue;
    const priceMFSInUSD = parseFloat(
      ethers.utils.formatUnits(await core.getPriceMFSInUSD(), DECIMALS)
    );
    const floatMfsInUSD =
      parseFloat(ethers.utils.formatUnits(mfsRevenue, DECIMALS)) *
      priceMFSInUSD;
    const floatUSD = parseFloat(
      ethers.utils.formatUnits(stableRevenue, DECIMALS)
    );
    return (floatMfsInUSD + floatUSD).toFixed(2).toString();
  }

  private async getJSONFromSubSquid(argument: string): Promise<any> {
    const chainId = await this.getChainId();
    const res = await fetch(URL_SQUID[chainId], {
      method: "POST",
      body: JSON.stringify({ query: argument }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  }

  private async genTokenTransactionsQuery(
    token: string,
    pageSize: number,
    pageNumber: number,
    userAddr: string,
    userId: number
  ): Promise<string> {
    const { metaPayment } = await this.getContracts();
    const metaPaymentAddr = metaPayment.address.toLowerCase();
    const query = `query TokenTransactions {
      events(limit: ${pageSize}, offset: ${
      pageSize * pageNumber
    }, orderBy: createdAt_DESC, where: {user: {id_eq: "${userId}"}, OR: {event: {userAddr_eq: "${userAddr}", erc20_eq: "${token}"}, OR: {event: {from: {id_eq: "${userId}"}, erc20_eq: "${token}"}, OR: {event: {to: {id_eq: "${userId}"}, erc20_eq: "${token}"}, contract_eq: "${metaPaymentAddr}"}, contract_eq: "${metaPaymentAddr}"}, contract_eq: "${metaPaymentAddr}"}, contract_eq: "${metaPaymentAddr}", event: {erc20_eq: "${token}"}}) {
        createdAt
        event {
          ... on DirectIncrease {
            __typename
            amount
          }
          ... on InternalIncrease {
            __typename
            amount
          }
          ... on DirectDecrease {
            __typename
            amount
          }
          ... on InternalDecrease {
            __typename
            amount
          }
          ... on InternalTransfer {
            __typename
            amount
            from {
              id
            }
            to {
              id
            }
          }
          ... on InternalTransferToContract {
            __typename
            amount
            contractAddress
          }
          ... on InternalTransferFromContract {
            __typename
            amount
            contractAddress
          }
        }
        id
      }
    }`;
    return query;
  }

  private async genMarketingBinaryTreeQuery(
    userId: number,
    pack: number,
    levelStart: number,
    levelEnd: number
  ): Promise<string> {
    const query = `query MarketingTree {marketingTree(userId: ${userId}, pack: ${pack},  levelStart: ${levelStart}, levelEnd: ${levelEnd}) {id, marketingReferrer, tier}}`;
    return query;
  }

  private async genMarketingLevelTreeQuery(
    userId: number,
    pack: number,
    levelStart: number,
    levelEnd: number
  ): Promise<string> {
    const query = `query MarketingTree {marketingTree(userId: ${userId}, pack: ${pack},  levelStart: ${levelStart}, levelEnd: ${levelEnd}) {id, refLevel}}`;
    return query;
  }

  private async genFreePlaceQuery(userId: number): Promise<string> {
    const query = `query FreePlace {
      freePlace(referrerId: ${userId}) {
        freePlace
        replace
      }
    }
    `;
    return query;
  }

  private async genRecentActivityQuery(
    pageSize: number,
    pageNumber: number,
    userId: number
  ): Promise<string> {
    const query = `query RecentActivity {
          users(where: {id_eq: "${userId}"}) {
        events(limit: ${pageSize}, offset: ${
      pageSize * pageNumber
    }, orderBy: [createdAt_DESC, id_DESC], where: {event: {isTypeOf_not_eq: "TimestampEndPack"}}) {
          contract
          createdAt
          event {
            ... on MarketingReferrerChanged {
              __typename
              accountId {
                id
              }
            }
            ... on RevenueMFS {
              __typename
              activation
              amount
              level
              marketing
              from {
                id
              }
            }
            ... on RevenueStable {
              __typename
              amount
              activation
              level
              marketing
              from {
                id
              }
            }
            ... on LostMoney {
              __typename
              amount
              marketing
              from {
                id
              }
            }
            ... on MFCPackIsRenewed {
              __typename
              amount
              level
              timestampEndPack
            }
            ... on MFCPackIsActivated {
              __typename
              amount
              level
              timestampEndPack
            }
            ... on MFCTokensMFSIsBuyingInOffer {
              __typename
              amount
            }
            ... on Registration {
              __typename
              referral {
                id
              }
            }
            ... on TimestampEndPack {
              __typename
              level
              timestamp
            }
          }
        }
      }
    }
    `;
    return query;
  }

  private async genRevenueStableQuery(
    userId: number,
    timeInterval: string,
    limit: number
  ): Promise<string> {
    const query = `query RevenueStable{revenueStable(userId: ${userId}, timeInterval: "${timeInterval}", limit: ${limit}) {revenue}}`;
    return query;
  }

  private async genRevenueMFSQuery(
    userId: number,
    timeInterval: string,
    limit: number
  ): Promise<string> {
    const query = `query RevenueMFS{revenueMFS(userId: ${userId}, timeInterval: "${timeInterval}", limit: ${limit}) {revenue}}`;
    return query;
  }

  private async genLostQuery(
    userId: number,
    timeInterval: string,
    limit: number
  ) {
    const query = `query LostMoney{lostMoney(userId: ${userId}, timeInterval: "${timeInterval}", limit: ${limit}) {revenue}}`;
    return query;
  }

  private async genCountHolders() {
    const query = `query CountHolders{mfsTotalSupply {holders}}`;
    return query;
  }

  private async genUsersCount(): Promise<string> {
    const query = `query UsersCount{usersConnection(orderBy: id_ASC) {totalCount}}`;
    return query;
  }

  private async genTotalRevenue(userId?: number): Promise<string> {
    let query;
    if (userId) {
      query = `query TotalRevenue {totalRevenue(userId: ${userId}) {mfsRevenue, stableRevenue}}`;
    } else {
      query = `query TotalRevenue {totalRevenue {mfsRevenue, stableRevenue}}`;
    }
    return query;
  }

  private async genUsersPacks(userId: number): Promise<string> {
    return `query UsersPacks {packs(orderBy: level_ASC, where: {user: {id_eq: "${userId}"}}) {expiresAt}}`;
  }

  public async checkContour(): Promise<void> {
    const {
      metaForce,
      metaCore,
      core,
      holding,
      request,
      metaPayment,
      stablecoin,
      registry,
      mfs,
      energy,
    } = await this.getContracts();
    const metaPool = await registry.getMetaPool();
    const approveAmountStable = await stablecoin.allowance(
      metaPool,
      core.address
    );

    console.log(
      `metaPool approve stable for core:${approveAmountStable}(maxInt256)`
    );

    const approveAmountMFS = await mfs.allowance(metaPool, core.address);
    console.log(`metaPool approve MFS for core:${approveAmountMFS}(maxInt256)`);
    const metaContractRoleInCore = await core.hasRole(
      META_FORCE_CONTRACT_ROLE,
      metaForce.address
    );
    console.log(
      `metaForceContract has role META_FORCE_CONTRACT_ROLE in core:${metaContractRoleInCore}(true)`
    );
    const holdingontractRoleInCore = await core.hasRole(
      META_FORCE_CONTRACT_ROLE,
      holding.address
    );
    console.log(
      `holdingContract has role META_FORCE_CONTRACT_ROLE in core:${holdingontractRoleInCore}(true)`
    );
    const requestContractRoleInCore = await core.hasRole(
      META_FORCE_CONTRACT_ROLE,
      request.address
    );
    console.log(
      `requestContract has role META_FORCE_CONTRACT_ROLE in core:${requestContractRoleInCore}(true)`
    );
    const workflowStage = await core.getWorkflowStage();
    console.log(`workflow in core: ${workflowStage} (>=1)`);
    const coreMetaRole = await metaPayment.hasRole(META_ROLE, core.address);
    console.log(`core has role META_ROLE in metaPayment:${coreMetaRole}(true)`);
    const metaForceMetaRole = await metaPayment.hasRole(
      META_ROLE,
      metaForce.address
    );
    console.log(
      `metaForceContract has role META_ROLE in metaPayment:${metaForceMetaRole}(true)`
    );
    const holdingMetaRole = await metaPayment.hasRole(
      META_ROLE,
      holding.address
    );
    console.log(
      `core has role META_ROLE in metaPayment:${holdingMetaRole}(true)`
    );
    const coreMinterMFS = await mfs.hasRole(MINTER_ROLE, core.address);
    console.log(`Core has role MINTER in mfs:${coreMinterMFS}(true)`);
    const coreBurnerMFS = await mfs.hasRole(BURNER_ROLE, core.address);
    console.log(`Core has role BURNER in mfs:${coreBurnerMFS}(true)`);
    const metaForceContractMinterEnergy = await energy.hasRole(
      MINTER_ROLE,
      metaForce.address
    );
    console.log(
      `metaForceContract has role MINTER in energy:${metaForceContractMinterEnergy}(true)`
    );
    const metaForceContractBurnerEnergy = await energy.hasRole(
      BURNER_ROLE,
      metaForce.address
    );
    console.log(
      `metaForceContract has role BURNER in energy:${metaForceContractBurnerEnergy}(true)`
    );
    const eqMetaCore = metaCore.address == (await metaPayment.metaCore());
    console.log(
      `metaCore in UV and metaCore in metaPayment is equal: ${eqMetaCore} (true)`
    );
    const emissionCommited = mfs.emissionCommitted();
    console.log(`emission mfs commited: ${emissionCommited} (true)`);
  }

  /// Методы для работы с нфт чипами
  private async getJSONFromNftGraphql(query: string | any): Promise<any> {
    let body = query;
    if (typeof query === "string") {
      body = { query: query };
    }
    const chainId = await this.getChainId();
    const res = await fetch(NFT_GRAPHQL_ENDPOINTS[chainId], {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  }

  private async getMyNftChipsQuery(
    user: string,
    level?: number,
    limit?: number
  ): Promise<string> {
    const chainId = await this.getChainId();
    const chipLevel = level ? `NFT_CHIP${level}_ADDRESSES` : "";
    const take = limit || "1000";
    const contractAddress = level
      ? `{ eq: "${(allConstants as any)[chipLevel][chainId]}"}`
      : `{
        in: [
          "${NFT_CHIP1_ADDRESSES[chainId]}"
          "${NFT_CHIP2_ADDRESSES[chainId]}"
          "${NFT_CHIP3_ADDRESSES[chainId]}"
          "${NFT_CHIP4_ADDRESSES[chainId]}"
          "${NFT_CHIP5_ADDRESSES[chainId]}"
          "${NFT_CHIP6_ADDRESSES[chainId]}"
          "${NFT_CHIP7_ADDRESSES[chainId]}"
          "${NFT_CHIP8_ADDRESSES[chainId]}"
          "${NFT_CHIP9_ADDRESSES[chainId]}"
        ]
      }`;

    return `query {
      nftTokens(
        where: {
          owner: { eq: "${user.toLocaleLowerCase()}" }
          contractAddress: ${contractAddress}
        }
        take: ${take}
      ) {
        items {
          tokenId
          contractAddress
          nftMetadata {
            name
            image
            attributes {
              traitType
              value
              maxValue
            }
          }
          nftContract {
            name
            level
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
    }`;
  }

  public async getMyNftChips(
    level?: number,
    limit?: number
  ): Promise<NftChipResponse> {
    const user = await this.signer.getAddress();
    const query = await this.getMyNftChipsQuery(user, level, limit);
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.nftTokens;
  }

  private async getMyWaveChipsQuery(
    user: number,
    level?: number
  ): Promise<string> {
    let where =
      `userId: { eq: "${user.toString()}" }` +
      (level ? `{ chipIndex: { eq: "${level}" }` : "");

    return `query {
      chips(
        where: { ${where} }
      ) {
        items {
          chipIndex
          isClaimed
          waveId
          machineId
        }
        totalCount
      }
    }`;
  }

  public async getMyWaveChips(level?: number): Promise<WaveChipResponse> {
    const user = await this.getUserID();
    const query = await this.getMyWaveChipsQuery(user, level);
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.chips;
  }

  private async getMyWavesQuery(
    user: number,
    status?: string
  ): Promise<string> {
    const where = status
      ? `wave: { waveStatus: { eq: ${status} } }`
      : `wave: { waveStatus: { neq: PREPARED } }`;

    return `query {
      userWaves(
        userId: "${user.toString()}",
        where: { ${where} }
        order: [{ wave: { waveId: ASC } }]
      ) {
        items {
          wave {
            waveId
            waveStatus
            rewardOre
            createdAt
            startDate
            endDate
          }
          capacity {
            extendCapacity
            extendCapacityMax
            filledCapacity
            filledCapacityMax
          }
          rewardOreClaimedItems {
            createdAt
            rewardAmount
            missedRewardAmount
            userId
          }
        }
        totalCount
      }
    }`;
  }

  public async getMyWaves(status?: string): Promise<MyWaveResponse> {
    const user = await this.getUserID();
    const query = await this.getMyWavesQuery(user, status);
    const res = await this.getJSONFromNftGraphql(query);
    return res?.data?.userWaves;
  }

  private async getMyActiveWavesCountQuery(user: number): Promise<string> {
    return `query {
      userWaves(
        userId: "${user.toString()}",
        where: { wave: { waveStatus: { eq: STARTED } } }
      ) {
        items {
          wave {
            endDate
            startDate
          }
        }
      }
    }`;
  }

  public async getMyActiveWavesCount(): Promise<any> {
    const user = await this.getUserID();
    const query = await this.getMyActiveWavesCountQuery(user);
    const res = await this.getJSONFromNftGraphql(query);
    return res?.data?.userWaves?.items || [];
  }

  private async getReadyMachinesInPreparedWaveQuery(): Promise<string> {
    return `query {
      machineCompletedInWavePrepared
    }`;
  }

  public async getReadyMachinesInPreparedWave(): Promise<number> {
    const query = await this.getReadyMachinesInPreparedWaveQuery();
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.machineCompletedInWavePrepared;
  }

  private async getWaveByIdQuery(waveId: string): Promise<string> {
    return `query {
      wave(
        where: {
          waveId: { eq: "${waveId.toString()}" }
        },
      ) {
        items {
          waveId
          waveStatus
          startDate
          endDate
          rewardOre
          createdAt
          txHash
          machines {
            machineId
            machineStatus
            level
            chips {
              chipIndex
              level
              id
              userId
            }
          }
        }
        totalCount
      }
    }`;
  }

  public async getWaveById(waveId: string): Promise<WaveResponse> {
    const query = await this.getWaveByIdQuery(waveId);
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.wave;
  }

  private async getMyWaveQuery(waveId: string, user: number): Promise<string> {
    return `query {
      userWaves(
        userId: "${user.toString()}",
        where: {
          wave: {
            waveStatus: { neq: PREPARED },
            waveId: { eq: "${waveId}" }
          }
        },
      ) {
        items {
          wave {
            waveId
            waveStatus
            rewardOre
            createdAt
            startDate
            endDate
          }
          capacity {
            extendCapacity
            extendCapacityMax
            filledCapacity
            filledCapacityMax
          }
        }
        totalCount
      }
    }`;
  }

  public async getMyWave(waveId: string): Promise<MyWaveResponse> {
    const user = await this.getUserID();
    const query = await this.getMyWaveQuery(waveId, user);
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.userWaves;
  }

  private async getMyWaveCapacityQuery(
    waveId: string,
    user: number
  ): Promise<string> {
    return `query {
      capacity(
        userId: "${user.toString()}",
        waveId: "${waveId}",
      ) {
        items {
          createdAt
          extendCapacity
          filledCapacity
          filledCapacityMax
        }
        totalCount
      }
    }`;
  }

  public async getMyWaveCapacity(waveId: string): Promise<CapacityResponse> {
    const user = await this.getUserID();
    const query = await this.getMyWaveCapacityQuery(waveId, user);
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.capacity;
  }

  private async getStartedMachinesQuery(): Promise<string> {
    return `query {
      machines(
        where: {
          machineStatus: { neq: COMPLETED },
        },
      ) {
        items {
          machineId
          machineStatus
          level
          chips {
            chipIndex
            level
            id
            userId
          }
        }
        totalCount
      }
    }`;
  }

  public async getStartedMachines(): Promise<MachineResponse> {
    const query = await this.getStartedMachinesQuery();
    const res = await this.getJSONFromNftGraphql(query);
    return res.data.machines;
  }

  private async getMyChipsQueueQuery(userId: number): Promise<string> {
    return `query {
      chipQueues(where: {
        userId: { eq: "${userId.toString()}" }
      }) {
        items {
          chipLevel
          count
          fromQueueToMachineDate
          activationDateList
        }
      }
    }`;
  }

  public async getMyChipsQueue(): Promise<MachineResponse> {
    const userId = await this.getUserID();
    const query = await this.getMyChipsQueueQuery(userId);
    const res = await this.getJSONFromNftGraphql(query);
    return res?.data?.chipQueues?.items || [];
  }

  /// BuyBack метод
  public async getBuyback(amount: string) {
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);
    const { exchangeController } = await this.getContracts();
    const estimation = await exchangeController.estimateGas.buyBack(
      parsedAmount
    );
    let tx: ContractTransaction;
    try {
      tx = await exchangeController.buyBack(parsedAmount, {
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  /// Методы для работы с forceswap

  public async createForceSwapOrder(amount: string) {
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);
    const { forceswap } = await this.getContracts();
    const estimation = await forceswap.estimateGas.createOrder(parsedAmount);
    let tx: ContractTransaction;
    try {
      tx = await forceswap.createOrder(parsedAmount, {
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  public async changeForceSwapOrderAmount(amount: string) {
    return await this.createForceSwapOrder(amount);
  }

  public async cancelForceSwapOrder() {
    const { forceswap } = await this.getContracts();
    const estimation = await forceswap.estimateGas.cancelOrder();
    let tx: ContractTransaction;
    try {
      tx = await forceswap.cancelOrder({
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  public getForceSwapOrderInfoQuery(orderId: string) {
    return `
      query {
        forceSwapOrderById(id: "${orderId}") {
          id
          status
          initialAmount
          initialAmountInUsd
          amount
          amountInUsd
          executedAmount
          executedAmountInUsd
        }
      }
    `;
  }

  public async getForceOrderInfo(orderId: string): Promise<ForceSwapOrderInfo> {
    const resp = await this.getJSONFromNftGraphql(
      this.getForceSwapOrderInfoQuery(orderId)
    );
    return resp.data.forceSwapOrderById;
    // const initialAmount = resp.data.created.items
    //   .reduce((acc: BigNumber, item: any) => acc.add(BigNumber.from(item.amount)), BigNumber.from(0));
    // const executedAmount = resp.data.executed.items
    //   .reduce((acc: BigNumber, item: any) => acc.add(BigNumber.from(item.amount)), BigNumber.from(0));
    // return [initialAmount, executedAmount];
  }

  public async getMyForceSwapOrderId(): Promise<string | null> {
    const { metaCore, forceswap } = await this.getContracts();
    const userId = await this.getUserID();
    const orderId = await forceswap.getOrderIdByUserId(userId);
    if (orderId == BigNumber.from(0)) {
      return null;
    }
    return orderId.toString();
  }

  public async getMyForceSwapOrder(): Promise<Web3ForceSwapOrder | null> {
    const { metaCore, forceswap } = await this.getContracts();
    const userId = await this.getUserID();

    const orderId = await this.getMyForceSwapOrderId();
    if (!orderId || orderId == "0") {
      return null;
    }
    const order = await forceswap.getOrderById(orderId);
    let queueNumber = BigNumber.from(10000);

    try {
      queueNumber = await forceswap.getPlaceInOrder(userId);
    } catch (e: any) {
      console.error(e);
    }

    let info: ForceSwapOrderInfo | null = null;

    try {
      info = await this.getForceOrderInfo(orderId);
    } catch (e: any) {
      console.error(e);
    }

    return {
      orderId: orderId.toString(),
      amount: order.amount.toString(),
      queueNumber: queueNumber.toString(),
      info: info,
    };
  }

  private getMyForceSwapOrdersHistoryQuery(userId: string) {
    return `
      query {
        forceSwapOrderChanges(
          where: { userId: { eq: "${userId}" } }
          order: { blockNumber: DESC }
          take: 100
        ) {
          items {
            id
            orderId
            createdAt
            txHash
            type
            amount
            amountInUsd
            chain {
              blockExplorerUrl
            }
          }
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
      `;
  }

  public async getMyForceSwapOrdersHistory(): Promise<ForceSwapOrderChangesResponse> {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyForceSwapOrdersHistoryQuery(userId.toString())
    );
    return resp.data.forceSwapOrderChanges;
  }

  private getForceSwapOrders(): string {
    return `
      query {
        forceSwapOrdersCount
      }
    `;
  }

  public async getForceSwapOrdersCount(): Promise<number> {
    const resp = await this.getJSONFromNftGraphql(this.getForceSwapOrders());
    return resp.data.forceSwapOrdersCount;
  }

  public getUVv2UpgradeDate(): Date {
    return UV_V2_UPGRADE_DT;
  }

  public async buyMfsFromForceSwap(amount: string) {
    const parsedAmount = ethers.utils.parseUnits(amount, DECIMALS);
    const { exchangeController, stablecoin, metaPayment, mfs } =
      await this.getContracts();

    const userId = await this.getUserID();
    const balanceOnPayment = await metaPayment.getBalance(
      stablecoin.address,
      userId
    );

    const rate = await exchangeController.getRate(
      stablecoin.address,
      mfs.address
    );
    const needStable = parsedAmount
      .mul(BigNumber.from("1000000000000000000"))
      .div(rate); // .add(ethers.utils.parseEther("0.01")); // .add(priceBuyingMFSInUSD);
    if (needStable.gt(balanceOnPayment)) {
      try {
        await this.approveCoin(
          metaPayment.address,
          stablecoin.address,
          needStable
        );
      } catch (e: any) {
        throw e.reason;
      }
    }
    const estimation = await exchangeController.estimateGas[
      "exchangeToExact(address,address,uint256,uint256)"
    ](stablecoin.address, mfs.address, parsedAmount, 0);
    let tx: ContractTransaction;
    try {
      tx = await exchangeController[
        "exchangeToExact(address,address,uint256,uint256)"
      ](stablecoin.address, mfs.address, parsedAmount, 0, {
        gasLimit: estimation.mul(3),
      });
    } catch (e: any) {
      // this.callbackFn(false);
      throw e.reason;
    }
    // this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  private getMyForceSwapBuyHistoryQuery(userId: string) {
    return `
        query {
          exchanges (
            where: { userId: { eq: "${userId}" } }
            order: { blockNumber: DESC }
            take: 100
          ) {
            items {
              txHash
              amountIn
              amountInUsd
              amountOut
              amountOutUsd
              createdAt
              chain {
                blockExplorerUrl
              }
            }
            totalCount
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      `;
  }

  public async getMyForceSwapBuyHistory(): Promise<ForceSwapBuyHistoryResponse> {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyForceSwapBuyHistoryQuery(userId.toString())
    );
    return resp.data.exchanges;
  }

  private getMyForceBuybackHistoryQuery(userId: string) {
    return `
        query {
          exchangeBuyBacks (
            where: { userId: { eq: "${userId}" } }
            order: { blockNumber: DESC }
            take: 100
          ) {
            items {
              id
              createdAt
              txHash
              amountOut
              amountIn
              chain {
                blockExplorerUrl
              }
            }
            totalCount
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      `;
  }

  public async getMyForceBuybackHistory(): Promise<ForceBuybackHistoryResponse> {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyForceBuybackHistoryQuery(userId.toString())
    );
    return resp.data.exchangeBuyBacks;
  }

  public async getBuyBackPoolBalance(): Promise<BigNumber> {
    const { metaPayment, stablecoin } = await this.getContracts();
    const chainId = await this.getChainId();
    return await metaPayment.contractBalances(
      BUYBACK_POOL_ADDRESS[chainId],
      stablecoin.address
    );
  }

  public async fetchVestingInfo(): Promise<VestingInfo> {
    const { metaPayment, mfs } = await this.getContracts();
    const userId = await this.getUserID();
    const chainId = await this.getChainId();

    const inputs = [
      {
        // доступная сумма mfs = без вестинга + размороженная
        target: metaPayment.address,
        function: "getBalance",
        args: [mfs.address, userId],
      },
      {
        // замороженная сумма
        target: metaPayment.address,
        function: "getUserVestingLockedAmount",
        args: [mfs.address, userId],
      },
      {
        // сколько разморозилось с вестинга
        target: metaPayment.address,
        function: "getAvalaibleVestingAmountWithoutClaims",
        args: [mfs.address, userId],
      },
      {
        // баланс фонда вестинга
        target: metaPayment.address,
        function: "contractBalances",
        args: [VESTING_FUND_ADDRESS[chainId], mfs.address],
      },
      {
        // тариф пользователя
        target: metaPayment.address,
        function: "getUserTariff",
        args: [mfs.address, userId],
      },
      {
        // сумма в вестинге без учета первого месяца,
        // нужна для расчета, сколько юзер заплатил в фонд
        target: metaPayment.address,
        function: "getUserVestingAmountWithoutFirstMonth",
        args: [mfs.address, userId],
      },
    ];

    const [, parameters] = await this.multi.multiCall(
      MetaPayment__factory.createInterface(),
      inputs
    );

    let res: VestingInfo = {
      mfsAmount: parameters[0],
      lockedAmount: parameters[1],
      releasedAmount: parameters[2],
      totalVestingAmount: parameters[1].add(parameters[2]),
      // 15% пойдет будет сожжено
      vestingFundAmount: parameters[3]
        .mul(BigNumber.from("85"))
        .div(BigNumber.from("100")),
      tariff: parameters[4],
      iHavePaidToVestingFund: BigNumber.from(0),
    };

    const getUserVestingAmountWithoutFirstMonth = parameters[5];
    if (res.tariff == VESTING_TARIFFS.T1) {
      // res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth.mul(BigNumber.from("30")).div(BigNumber.from("100"));
      res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth
        .mul(BigNumber.from("100"))
        .div(BigNumber.from("70"))
        .sub(getUserVestingAmountWithoutFirstMonth);
    }
    if (res.tariff == VESTING_TARIFFS.T2) {
      // res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth.mul(BigNumber.from("15")).div(BigNumber.from("100"));
      res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth
        .mul(BigNumber.from("100"))
        .div(BigNumber.from("85"))
        .sub(getUserVestingAmountWithoutFirstMonth);
    }
    if (res.tariff == VESTING_TARIFFS.T6) {
      // res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth.mul(BigNumber.from("50")).div(BigNumber.from("100"));
      res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth
        .mul(BigNumber.from("100"))
        .div(BigNumber.from("50"))
        .sub(getUserVestingAmountWithoutFirstMonth);
    }
    if (res.tariff == VESTING_TARIFFS.T6) {
      res.iHavePaidToVestingFund = getUserVestingAmountWithoutFirstMonth
        .mul(BigNumber.from("50"))
        .div(BigNumber.from("100"));
    }

    return res;
  }

  // public async getMyVestingTariff() : Promise<Tariff> {
  //   const { metaPayment, mfs } = await this.getContracts();
  //   const userId = await this.getUserID();

  //   const currentTariff = await metaPayment.getUserTariff(mfs.address, userId);
  //   return { currentTariff };
  // }

  // T3 - 0
  // T1 - 1
  // T2 - 2
  // T4 - 3
  // T5 - 4
  public async isTariffAvailable(tariff: VESTING_TARIFFS): Promise<boolean> {
    const { metaPayment, mfs } = await this.getContracts();
    return await metaPayment.isTariffAvailable(mfs.address, tariff);
  }

  public async selectVestingTariff(tariff: number) {
    const { metaPayment, mfs } = await this.getContracts();

    const tx = await metaPayment.chooseTariff(
      mfs.address,
      BigNumber.from(tariff)
    );
    return await tx.wait();
  }

  public async getVestingTariffAmounts(): Promise<BigNumber[]> {
    const { metaPayment, mfs } = await this.getContracts();
    const target = metaPayment.address;

    const inputs = [
      {
        target,
        function: "getTariffAmount",
        args: [mfs.address, VESTING_TARIFFS.T1],
      },
      {
        target,
        function: "getTariffAmount",
        args: [mfs.address, VESTING_TARIFFS.T2],
      },
      {
        target,
        function: "getTariffAmount",
        args: [mfs.address, VESTING_TARIFFS.T4],
      },
      {
        target,
        function: "getTariffAmount",
        args: [mfs.address, VESTING_TARIFFS.T5],
      },
      {
        target,
        function: "getTariffAmount",
        args: [mfs.address, VESTING_TARIFFS.T6],
      },
    ];

    const [, parameters] = await this.multi.multiCall(
      MetaPayment__factory.createInterface(),
      inputs
    );

    const totalVestingAmount = BigNumber.from("268466592995062877808695807");
    let defaultTariffAmount = totalVestingAmount;

    const tariffAmounts = [
      BigNumber.from(0), // tariff 3
      parameters[0].mul(BigNumber.from("70")).div(BigNumber.from("100")), // tariff 1
      parameters[1].mul(BigNumber.from("85")).div(BigNumber.from("100")), // tariff 2
      parameters[2], // tariff 4
      parameters[3], // tariff 5
      parameters[4].mul(BigNumber.from("50")).div(BigNumber.from("100")), // tariff 6
    ];

    tariffAmounts.forEach((amount, index) => {
      defaultTariffAmount = defaultTariffAmount.sub(amount);
    });
    tariffAmounts[VESTING_TARIFFS.T3] = defaultTariffAmount;

    return tariffAmounts;
  }

  // Buyback order request - предложить свою цену
  private getMyMfsBuybackOrderRequestQuery(userId: string) {
    return `
        query {
          mfsBuybackOrderRequestByUserId(
            id: "${userId}"
            order: { createdAt: DESC }
          ) {
            items {
              amount
              createdAt
              id
              price
              userAddress
              userId
              web3Signature
            }
          }
        }
      `;
  }

  public async getMyMfsBuybackOrderRequests(): Promise<
    MfsBuybackOrderRequest[]
  > {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyMfsBuybackOrderRequestQuery(userId.toString())
    );
    console.log("resp", resp);
    return resp.data.mfsBuybackOrderRequestByUserId.items;
  }

  private createMfsBuybackOrderRequestMutation(
    userAddress: string,
    userId: string,
    signature: string,
    amount: string,
    price: string
  ) {
    return `
        mutation {
          createMfsBuybackOrderRequest(
            input: {
              amount: "${amount}"
              price: "${price}"
              userAddress: "${userAddress}"
              web3Signature: "${signature}"
              userId: "${userId}"
            }
          ) {
            mfsBuybackOrderRequest {
              amount
              createdAt
              id
              price
              userAddress
              userId
              web3Signature
            }
          }
        }
      `;
  }

  public async createMfsBuybackOrderRequest(
    amount: BigNumber,
    price: BigNumber
  ): Promise<MfsBuybackOrderRequest> {
    const address = await this.getUserAddress();
    const userId = await this.getUserID(address);

    const signature = await this.signer.signMessage(
      `I want to sell ${ethers.utils.formatEther(
        amount
      )} MFS by price 1MFS = ${ethers.utils.formatEther(price)} DAI`
    );
    // const msgSignerAddr = ethers.utils.verifyMessage(msg, sig);

    const resp = await this.getJSONFromNftGraphql(
      this.createMfsBuybackOrderRequestMutation(
        address,
        userId.toString(),
        signature,
        amount.toString(),
        price.toString()
      )
    );
    console.log("resp", resp);
    return resp.data.createMfsBuybackOrderRequest.mfsBuybackOrderRequest;
  }

  public async fetchBuyBackMFSPrice(): Promise<BigNumber> {
    const { exchangeController } = await this.getContracts();
    return await exchangeController.buyBackRate();
  }

  public async createExtendChipsBatchRequest(
    waveId: BigNumber,
    machineIds: BigNumber[],
    chipIndexes: BigNumber[],
    totalExtendAmount: BigNumber
  ): Promise<any> {
    const { quantumWave } = await this.getContracts();
    let tx: ContractTransaction;
    try {
      tx = await quantumWave.extendChipBatch(
        waveId,
        machineIds,
        chipIndexes,
        totalExtendAmount
      );
    } catch (e: any) {
      console.log("Can't extend chips: ", e);
      throw e.reason ?? e.message ?? e;
    }
    this.callbackFn(true);
    return await tx?.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  public async createFillChipsBatchRequest(
    waveId: BigNumber,
    machineIds: BigNumber[],
    chipIndexes: BigNumber[],
    totalExtendAmount: BigNumber
  ): Promise<any> {
    const { quantumWave } = await this.getContracts();
    let tx: ContractTransaction;
    try {
      tx = await quantumWave.fillWave(
        waveId,
        machineIds,
        chipIndexes,
        totalExtendAmount
      );
    } catch (e: any) {
      console.log("Can't fill chips: ", e);
      throw e.reason ?? e.message ?? e;
    }
    this.callbackFn(true);
    return await tx?.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  public async createGetUserRewardOreRequest(
    waveId: BigNumber,
    machineIds: BigNumber[],
    chipIndexes: BigNumber[]
  ): Promise<any> {
    const { quantumWave } = await this.getContracts();
    const userId = await this.getUserID();

    const { rewardOre } = await quantumWave.getUserRewardOre(
      userId,
      waveId,
      machineIds,
      chipIndexes
    );
    return ethers.utils.formatUnits(rewardOre, DECIMALS);
  }

  public async createCalculateProfitForFillRequest(
    waveId: BigNumber,
    machineIds: BigNumber[],
    chipIndexes: BigNumberish[],
    fillAmount: BigNumber
  ): Promise<any> {
    const userId = await this.getUserID();
    const { quantumWave } = await this.getContracts();
    const rewardOre = await quantumWave.calculateProfitForFill(
      userId,
      waveId,
      machineIds,
      chipIndexes,
      fillAmount
    );
    return ethers.utils.formatUnits(rewardOre, DECIMALS);
  }

  public async createClaimRewardOreRequest(
    waveId: BigNumber,
    machineIds: BigNumber[],
    chipIndexes: BigNumber[]
  ): Promise<any> {
    const { quantumWave } = await this.getContracts();
    const userId = await this.getUserID();
    let tx: ContractTransaction;
    try {
      tx = await quantumWave.claimRewardOre(
        userId,
        waveId,
        machineIds,
        chipIndexes
      );
    } catch (e: any) {
      console.log("Can't claim reward ore: ", e);
      throw e.reason ?? e.message ?? e;
    }
    this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  // mini-game (get QEN)
  private getMySignMessageQuery(user: string) {
    return `
        query {
          buttonGameLoginMessage (
            model: { address: "${user}" }
          ) {
            message
          }
        }
      `;
  }

  private createStartGameRequestMutation(
    user: string,
    message: string,
    signature: string
  ) {
    return {
      query: `
        mutation buttonGameStart($address: BlockchainAddress!, $message: String!, $signature: String) {
          buttonGameStart(
            input: {
              model: {
                address: $address
                message: $message
                signature: $signature
              }
            }
          ) {
            buttonGameStartResponseDto {
              message
            }
          }
        }
      `,
      variables: {
        address: user,
        message: message,
        signature: signature,
      },
    };
  }

  public async createStartGameRequest(): Promise<any> {
    const user = await this.signer.getAddress();

    const messageResp = await this.getJSONFromNftGraphql(
      this.getMySignMessageQuery(user)
    );
    const message = messageResp.data.buttonGameLoginMessage.message;
    const signature = await this.signer.signMessage(message);

    const resp = await this.getJSONFromNftGraphql(
      this.createStartGameRequestMutation(user, message, signature)
    );
    return resp?.data?.buttonGameStart?.buttonGameStartResponseDto;
  }

  private createGameAvailableRewardRequestMutation(userId: string) {
    return {
      query: `
        mutation buttonGameRequestAvailableReward($userId: BigInt) {
          buttonGameRequestAvailableReward(
            input: {
              model: {
                userId: $userId
              }
            }
          ) {
            buttonGameRewardRequestDto {
              amount
              signature
              userNonce
              blockLimit
            }
          }
        }
      `,
      variables: {
        userId: userId,
      },
    };
  }

  public async createGameAvailableRewardRequest(): Promise<any> {
    const LS_NAME = 'claimInProgressTXWithTTL';
    const userId = await this.getUserID();
    const { buttonApp } = await this.getContracts();

    let tx: ContractTransaction;
    let hash: string;
    let resp;

    try {
      resp = await this.getJSONFromNftGraphql(this.createGameAvailableRewardRequestMutation(userId.toString()));
      const { amount, signature, userNonce, blockLimit } = resp?.data?.buttonGameRequestAvailableReward?.buttonGameRewardRequestDto;
      tx = await buttonApp.claimReward(userNonce, amount, blockLimit, signature);

      hash = tx.hash;
      const savedTx = localStorage.getItem('claimInProgressTX');
      let savedTxObj = {};
      try {
        savedTxObj = JSON.parse(savedTx) || {};
      } catch(e) {}

      savedTxObj[userId.toString()] = { tx: hash, ttl: Date.now() };
      localStorage.setItem(LS_NAME, JSON.stringify(savedTxObj));

    } catch (e) {
      console.log('Can\'t claim reward NTC: ');
      console.log(resp);
      console.log(e);

      const savedTx = localStorage.getItem(LS_NAME);
      let savedTxObj = {};
      try {
        savedTxObj = JSON.parse(savedTx);
        delete savedTxObj[userId.toString()];
      } catch(e) {}

      localStorage.setItem(LS_NAME, JSON.stringify(savedTxObj));
      throw (resp?.errors && resp.errors[0]?.message) || (e.reason ?? e.message ?? e);
    }
    this.callbackFn(true);
    await tx.wait(this.DEFAULT_BLOCK_CONFIRMS);
  }

  public async getTransactionStatus(hash: string) {
    if (!hash) {
      return 'NO_TX';
    }

    let res: any;

    try {
      res = await this.provider.getTransactionReceipt(hash);
      if (res?.status) {
        return res.status == 1 ? 'SUCCESS' : 'ERROR';
      } else {
        return 'PENDING';
      }
    } catch (e) {
      return 'STATUS_REQUEST_FAIL';
    }
  }

  private getMyButtonGameInfoQuery(userId: string) {
    return {
      query: `
        query getMyButtonGame($userId: BigInt!) {
          buttonGameUserInfo(model: {
            userId: $userId
          }) {
            createdAt
            nextRewardAt
            nextRewardAmount
            lastTxHash
            totalClaimedReward
            isActive
          }
        }
      `,
      variables: {
        userId: userId,
      },
    };
  }

  public async getMyButtonGameInfo(): Promise<any> {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyButtonGameInfoQuery(userId.toString())
    );
    return resp?.data?.buttonGameUserInfo;
  }

  // HOTFIX запросы
  private async getMachineCompletedInWavePreparedQuery(): Promise<string> {
    return `query {
      machineCompletedInWavePrepared() {
        level
        readyMachines
      }
    }`;
  }

  public async getMachineCompletedInWavePrepared(): Promise<WaveResponse> {
    const query = await this.getMachineCompletedInWavePreparedQuery();
    const res = await this.getJSONFromNftGraphql(query);
    return res?.data?.machineCompletedInWavePrepared || [];
  }

  private getPreparedMachineInfoQuery() {
    return `
        query {
          preparedMachineInfo() {
            level
            readyChips
          }
        }
      `;
  }

  public async getPreparedMachineInfo(): Promise<any> {
    const resp = await this.getJSONFromNftGraphql(
      this.getPreparedMachineInfoQuery()
    );
    return resp?.data?.preparedMachineInfo || [];
  }

  private getMyPreparedMachineInfoQuery(userId: string) {
    return `
      query {
        myPreparedMachineInfo(
          userId: "${userId}"
        ) {
          level
          readyChips
        }
      }
    `;
  }

  public async getMyPreparedMachineInfo(): Promise<any> {
    const userId = await this.getUserID();
    const resp = await this.getJSONFromNftGraphql(
      this.getMyPreparedMachineInfoQuery(userId.toString())
    );
    return resp?.data?.myPreparedMachineInfo || [];
  }
}
