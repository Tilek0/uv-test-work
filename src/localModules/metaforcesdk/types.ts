import { BigNumber } from 'ethers';
import { ExchangeController } from './contracts/types';
import { ButtonApp } from "./contracts/types/ButtonApp";
import { Core } from "./contracts/types/Core";
import { Energy } from "./contracts/types/Energy";
import { Erc20 } from "./contracts/types/Erc20";
import { Forceswap } from "./contracts/types/Forceswap";
import { Holding } from "./contracts/types/Holding";
import { MetaCore } from "./contracts/types/MetaCore";
import { MetaForce } from "./contracts/types/MetaForce";
import { MetaPayment } from "./contracts/types/MetaPayment";
import { Mfs } from "./contracts/types/Mfs";
import { QuantumWave } from "./contracts/types/QuantumWave";
import { Registry } from "./contracts/types/Registry";
import { Request } from "./contracts/types/Request";
export enum RewardType {
  Mfs,
  MfsStablecoin,
  Stablecoin,
}

export enum StatusRequest {
  Pending,
  Approved,
  Declined,
}

export enum WorkflowStage {
  Preparatory,
  Presale,
  SaleHold,
  SaleOpen,
}

export enum RenewalCurrency {
  Mfs,
  hMfs1,
  hMfs2,
  hMfs3,
  hMfs4,
  hMfs5,
  hMfs6,
  hMfs7,
  hMfs8,
}

export type Pack = {
  timeStampEndPack: Date;
  isActive: boolean;
};

export type MarketingUserForBinary = {
  id: number;
  marketingReferrer: number;
  tier: number;
};

export type MarketingUserForLevel = {
  id: number;
  refLevel: number;
};

export type ReferralUserInfo = {
  userId: number;
  avatar: string;
  alias: string;
  referrerId: number;
  referralsAmount: number;
};

export type UserInfo = {
  address: string;
  rewardType: RewardType;
  level: number;
  registeredAt: Date;
  nickName: string;
};

export type Deposit = {
  holderId: number;
  unholdingAllowed: boolean;
  entryLevel: number;
  amount: string;
  createdAt: Date;
};

export type Contracts = {
  registry: Registry;
  metaCore: MetaCore;
  metaPayment: MetaPayment;
  core: Core;
  holding: Holding;
  metaForce: MetaForce;
  request: Request;
  mfs: Mfs;
  quantumWave: QuantumWave;
  eqn: Erc20;
  qen: Erc20;
  qre: Erc20;
  stablecoin: Mfs;
  energy: Energy;
  hMfs: Erc20[];
  forceswap: Forceswap;
  exchangeController: ExchangeController;
  buttonApp: ButtonApp;
};

export type Tokens = {
  mfs: string;
  mfsVesting: string;
  stablecoin: string;
  energy: string;
  hMfs: string[];
};

export type EnoughMatic = {
  enough: boolean;
  maticBalance: string;
};

export type Stats = {
  workflowStage: WorkflowStage;
  firstPackPriceInUSD: string;
  mfsPriceInUSD: string;
  mfsTotalEmission: string;
  bigBlockNumber: number;
  endBigBlockEmission: string;
  smallBlockNumber: number;
  endSmallBlockEmission: string;
  usersCount: string;
  totalRevenue: string;
};

export type Balances = {
  mfs: string;
  mfsVesting: string;
  stablecoin: string;
  energy: string;
  hMfs: string[];
  eqn: string;
  qen: string;
  qre: string;
};

export type MfsRequest = {
  requester: string;
  startUSDAmount: string;
  usdAmount: string;
  buyedMFS: string;
  spentUSD: string;
  priority: number;
  status: StatusRequest;
  placeInQueue: number;
};

export type PossibilityBuyingMFS = {
  endBuyingPeriodDate: Date;
  amount: string;
};

export type Event = {
  contract: string;
  userId: number;
  name: string;
  date: Date;
  value: string;
  amount: string;
};

export type RequestedMFS = {
  total: string;
  airdrop: string;
  self: string;
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type NftChipResponse = {
  items: NftChip[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type NftChip = {
  tokenId: string;
  contractAddress: string;
  nftMetadata: {
    name: string;
    image: string;
    // description: string;
  };
  nftContract: {
    name: string;
    level: string;
  };
};

export type WaveChipResponse = {
  items: WaveChip[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type WaveChip = {
  chipIndex: string;
  isClaimed: boolean;
  waveId: string;
  machineId: string;
  createdAt: string;
  extendShare: string;
  // filledShare: string;
  id: string;
  logIndex: string;
  userId: string;
};

export type MachineResponse = {
  items: Machine[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type Machine = {
  machineId: string;
  machineStatus: string;
  level: number;
  logIndex: string;
  chips: WaveChip[];
};

export type WaveResponse = {
  items: Wave[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type MyWaveResponse = {
  items: WaveWithCapacity[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type WaveWithCapacity = {
  wave: Wave;
  rewardOreClaimedItems: RewardOreClaimed[];
  capacity: Capacity;
};

export type Wave = {
  waveId: string;
  waveStatus: string;
  startDate: string;
  endDate: string;
  rewardOre: number;
  chainId: number;
  createdAt: string;
  txHash: string;
  logIndex: string;
  machines: Machine[];
};

export type CapacityResponse = {
  items: Capacity[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type Capacity = {
  createdAt: string;
  txHash: string;
  logIndex: string;
  extendCapacity: BigNumber;
  extendCapacityMax: BigNumber;
  filledCapacity: BigNumber;
  filledCapacityMax: BigNumber;
};

export type RewardOreClaimed = {
  createdAt: string;
  rewardAmount: BigNumber;
  missedRewardAmount: BigNumber;
  userId: BigNumber;
};

export type Web3ForceSwapOrder = {
  orderId: string;
  amount: string;
  queueNumber: string;
  info: ForceSwapOrderInfo | null;
};

export type ForceSwapOrderChange = {
  id: string;
  orderId: string;
  createdAt: Date;
  txHash: string;
  type: string;
  amount: string;
  amountInUsd: string;
  chain: {
    blockExplorerUrl: string;
  };
};

export type ForceBuybackHistoryResponse = {
  items: ForceBuybackHistory[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type ForceBuybackHistory = {
  id: string;
  createdAt: Date;
  txHash: string;
  amountOut: string;
  amountIn: string;
  chain: {
    blockExplorerUrl: string;
  };
};

export type ForceSwapOrderChangesResponse = {
  items: ForceSwapOrderChange[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type ForceSwapBuyHistoryRow = {
  createdAt: Date;
  txHash: string;
  amountIn: string;
  amountInUsd: string;
  amountOut: string;
  amountOutUsd: string;
  chain: {
    blockExplorerUrl: string;
  };
};

export type ForceSwapBuyHistoryResponse = {
  items: ForceSwapBuyHistoryRow[];
  pageInfo: PageInfo;
  totalCount: number;
};

export type ForceSwapOrderInfo = {
  id: string;
  status: string;
  initialAmount: string;
  initialAmountInUsd: number;
  amount: string;
  amountInUsd: number;
  executedAmount: string;
  executedAmountInUsd: number;
};

export type VestingInfo = {
  mfsAmount: BigNumber;
  lockedAmount: BigNumber;
  releasedAmount: BigNumber;
  totalVestingAmount: BigNumber;
  vestingFundAmount: BigNumber;
  iHavePaidToVestingFund: BigNumber;
  tariff: VESTING_TARIFFS;
};

export type Tariff = {
  currentTariff: number;
};

export enum VESTING_TARIFFS {
  T3 = 0,
  T1 = 1,
  T2 = 2,
  T4 = 3,
  T5 = 4,
  T6 = 5,
}

// export type VESTING_TARIFF_COMMISSIONS = {
//   0: 0,
//   1: 0.3,
//   2: 0.15,
//   3: 0,
//   4: 0,
// }

// export type VestingInfo = {
//   totalAmount: BigNumber;
//   iHavePaid: BigNumber;
// }

export type MfsBuybackOrderRequest = {
  id: string;
  amount: BigNumber;
  createdAt: Date;
  price: BigNumber;
};

export enum TokenTxType {
  DirectIncrease = "DirectIncrease",
  InternalIncrease = "InternalIncrease",
  DirectDecrease = "DirectDecrease",
  InternalDecrease = "InternalDecrease",
  InternalTransfer = "InternalTransfer",
  InternalTransferToContract = "InternalTransferToContract",
  InternalTransferFromContract = "InternalTransferFromContract",
}
export type DirectIncrease = {
  type: TokenTxType.DirectIncrease;
  amount: string;
};
export type InternalIncrease = {
  type: TokenTxType.InternalIncrease;
  amount: string;
};
export type DirectDecrease = {
  type: TokenTxType.DirectDecrease;
  amount: string;
};
export type InternalDecrease = {
  type: TokenTxType.InternalDecrease;
  amount: string;
};
export type InternalTransferIdType = "sender" | "receiver";
export type InternalTransfer = {
  type: TokenTxType.InternalTransfer;
  id: number;
  idType: InternalTransferIdType;
  amount: string;
};
export type InternalTransferToContract = {
  type: TokenTxType.InternalTransferToContract;
  contractAddress: string;
  amount: string;
};
export type InternalTransferFromContract = {
  type: TokenTxType.InternalTransferFromContract;
  contractAddress: string;
  amount: string;
};
export type TokenTxEventData =
  | DirectIncrease
  | InternalIncrease
  | DirectDecrease
  | InternalDecrease
  | InternalTransfer
  | InternalTransferToContract
  | InternalTransferFromContract;

export type TokenTx = {
  txHash: string;
  date: Date;
  eventData: TokenTxEventData;
};
