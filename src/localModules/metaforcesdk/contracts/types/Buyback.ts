/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BuybackInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "buyBack(uint256)": FunctionFragment;
    "buyBackRate()": FunctionFragment;
    "exchangeExactTo(uint256,address,address,uint256,uint256)": FunctionFragment;
    "exchangeToExact(uint256,address,address,uint256,uint256)": FunctionFragment;
    "exchangeToExact(address,address,uint256,uint256)": FunctionFragment;
    "getRate(address,address)": FunctionFragment;
    "getRegistry()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getSwapContract()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setBuyBackRate(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "buyBack"
      | "buyBackRate"
      | "exchangeExactTo"
      | "exchangeToExact(uint256,address,address,uint256,uint256)"
      | "exchangeToExact(address,address,uint256,uint256)"
      | "getRate"
      | "getRegistry"
      | "getRoleAdmin"
      | "getSwapContract"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "renounceRole"
      | "revokeRole"
      | "setBuyBackRate"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyBack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyBackRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeExactTo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeToExact(uint256,address,address,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeToExact(address,address,uint256,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRate",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBuyBackRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyBackRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeExactTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeToExact(uint256,address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeToExact(address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBuyBackRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "BuyBack(uint256,uint256,uint256)": EventFragment;
    "BuyBackRateChanged(uint256,uint256)": EventFragment;
    "DebtRepayment(uint256,address,address,uint256,uint256)": EventFragment;
    "Exchange(uint256,address,address,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyBackRateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DebtRepayment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface BuyBackEventObject {
  userId: BigNumber;
  mfsAmount: BigNumber;
  daiAmount: BigNumber;
}
export type BuyBackEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  BuyBackEventObject
>;

export type BuyBackEventFilter = TypedEventFilter<BuyBackEvent>;

export interface BuyBackRateChangedEventObject {
  oldBuyBackRate: BigNumber;
  newBuyBackRate: BigNumber;
}
export type BuyBackRateChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  BuyBackRateChangedEventObject
>;

export type BuyBackRateChangedEventFilter =
  TypedEventFilter<BuyBackRateChangedEvent>;

export interface DebtRepaymentEventObject {
  userId: BigNumber;
  tokenIn: string;
  tokenOut: string;
  amountIn: BigNumber;
  amountOut: BigNumber;
}
export type DebtRepaymentEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  DebtRepaymentEventObject
>;

export type DebtRepaymentEventFilter = TypedEventFilter<DebtRepaymentEvent>;

export interface ExchangeEventObject {
  userId: BigNumber;
  tokenIn: string;
  tokenOut: string;
  amountIn: BigNumber;
  amountOut: BigNumber;
}
export type ExchangeEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  ExchangeEventObject
>;

export type ExchangeEventFilter = TypedEventFilter<ExchangeEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface Buyback extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BuybackInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    buyBack(
      mfsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyBackRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeExactTo(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exchangeToExact(uint256,address,address,uint256,uint256)"(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exchangeToExact(address,address,uint256,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRate(
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRegistry(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSwapContract(overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _getRegistry: PromiseOrValue<string>,
      _getSwapContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBuyBackRate(
      newBuyBackRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  buyBack(
    mfsAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyBackRate(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeExactTo(
    userId: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exchangeToExact(uint256,address,address,uint256,uint256)"(
    userId: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountOut: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exchangeToExact(address,address,uint256,uint256)"(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountOut: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRate(
    tokenFrom: PromiseOrValue<string>,
    tokenTo: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRegistry(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSwapContract(overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _getRegistry: PromiseOrValue<string>,
    _getSwapContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBuyBackRate(
    newBuyBackRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    buyBack(
      mfsAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyBackRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeExactTo(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "exchangeToExact(uint256,address,address,uint256,uint256)"(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "exchangeToExact(address,address,uint256,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRate(
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegistry(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSwapContract(overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _getRegistry: PromiseOrValue<string>,
      _getSwapContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBuyBackRate(
      newBuyBackRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "BuyBack(uint256,uint256,uint256)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      mfsAmount?: PromiseOrValue<BigNumberish> | null,
      daiAmount?: PromiseOrValue<BigNumberish> | null
    ): BuyBackEventFilter;
    BuyBack(
      userId?: PromiseOrValue<BigNumberish> | null,
      mfsAmount?: PromiseOrValue<BigNumberish> | null,
      daiAmount?: PromiseOrValue<BigNumberish> | null
    ): BuyBackEventFilter;

    "BuyBackRateChanged(uint256,uint256)"(
      oldBuyBackRate?: null,
      newBuyBackRate?: null
    ): BuyBackRateChangedEventFilter;
    BuyBackRateChanged(
      oldBuyBackRate?: null,
      newBuyBackRate?: null
    ): BuyBackRateChangedEventFilter;

    "DebtRepayment(uint256,address,address,uint256,uint256)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      tokenIn?: null,
      tokenOut?: null,
      amountIn?: null,
      amountOut?: null
    ): DebtRepaymentEventFilter;
    DebtRepayment(
      userId?: PromiseOrValue<BigNumberish> | null,
      tokenIn?: null,
      tokenOut?: null,
      amountIn?: null,
      amountOut?: null
    ): DebtRepaymentEventFilter;

    "Exchange(uint256,address,address,uint256,uint256)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      tokenIn?: null,
      tokenOut?: null,
      amountIn?: null,
      amountOut?: null
    ): ExchangeEventFilter;
    Exchange(
      userId?: PromiseOrValue<BigNumberish> | null,
      tokenIn?: null,
      tokenOut?: null,
      amountIn?: null,
      amountOut?: null
    ): ExchangeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    buyBack(
      mfsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyBackRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeExactTo(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exchangeToExact(uint256,address,address,uint256,uint256)"(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exchangeToExact(address,address,uint256,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRate(
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapContract(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _getRegistry: PromiseOrValue<string>,
      _getSwapContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBuyBackRate(
      newBuyBackRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyBack(
      mfsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyBackRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeExactTo(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exchangeToExact(uint256,address,address,uint256,uint256)"(
      userId: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exchangeToExact(address,address,uint256,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRate(
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _getRegistry: PromiseOrValue<string>,
      _getSwapContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBuyBackRate(
      newBuyBackRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}