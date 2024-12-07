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

export interface RequestInterface extends utils.Interface {
  functions: {
    "acceptGovernance()": FunctionFragment;
    "airdropPoolCoeffs(uint256)": FunctionFragment;
    "createRequestMFS(uint256)": FunctionFragment;
    "deleteRequestMFS(uint256)": FunctionFragment;
    "getAmountUSDRequest(uint256)": FunctionFragment;
    "getIdRequester(uint256)": FunctionFragment;
    "getNextLevel()": FunctionFragment;
    "getNextRequestId()": FunctionFragment;
    "getNumberInQueue(uint256)": FunctionFragment;
    "getRequestIdsFromQueue(uint256,uint256)": FunctionFragment;
    "getRequestsIdsForUser(uint256)": FunctionFragment;
    "governor()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "minimumRequestUSD()": FunctionFragment;
    "ownersRequests(uint256,uint256)": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "queues(uint256)": FunctionFragment;
    "realizeMFS(uint256)": FunctionFragment;
    "requestInQueue(uint256)": FunctionFragment;
    "requests(uint256)": FunctionFragment;
    "setAirdropPoolCoeffs(uint256,uint256)": FunctionFragment;
    "setMinimumRequestUSD(uint256)": FunctionFragment;
    "transitGovernance(address,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptGovernance"
      | "airdropPoolCoeffs"
      | "createRequestMFS"
      | "deleteRequestMFS"
      | "getAmountUSDRequest"
      | "getIdRequester"
      | "getNextLevel"
      | "getNextRequestId"
      | "getNumberInQueue"
      | "getRequestIdsFromQueue"
      | "getRequestsIdsForUser"
      | "governor"
      | "initialize"
      | "minimumRequestUSD"
      | "ownersRequests"
      | "pendingGovernor"
      | "queues"
      | "realizeMFS"
      | "requestInQueue"
      | "requests"
      | "setAirdropPoolCoeffs"
      | "setMinimumRequestUSD"
      | "transitGovernance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "airdropPoolCoeffs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createRequestMFS",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRequestMFS",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountUSDRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIdRequester",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextLevel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberInQueue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestIdsFromQueue",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestsIdsForUser",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumRequestUSD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownersRequests",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queues",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "realizeMFS",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestInQueue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAirdropPoolCoeffs",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumRequestUSD",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transitGovernance",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropPoolCoeffs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRequestMFS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRequestMFS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountUSDRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIdRequester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberInQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestIdsFromQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestsIdsForUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumRequestUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownersRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queues", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "realizeMFS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestInQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAirdropPoolCoeffs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumRequestUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transitGovernance",
    data: BytesLike
  ): Result;

  events: {
    "GovernanceTransited(address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "PendingGovernanceTransition(address,address)": EventFragment;
    "TokensMFSIsBuyingInRequest(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernanceTransited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PendingGovernanceTransition"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensMFSIsBuyingInRequest"): EventFragment;
}

export interface GovernanceTransitedEventObject {
  governor: string;
  newGovernor: string;
}
export type GovernanceTransitedEvent = TypedEvent<
  [string, string],
  GovernanceTransitedEventObject
>;

export type GovernanceTransitedEventFilter =
  TypedEventFilter<GovernanceTransitedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PendingGovernanceTransitionEventObject {
  governor: string;
  newGovernor: string;
}
export type PendingGovernanceTransitionEvent = TypedEvent<
  [string, string],
  PendingGovernanceTransitionEventObject
>;

export type PendingGovernanceTransitionEventFilter =
  TypedEventFilter<PendingGovernanceTransitionEvent>;

export interface TokensMFSIsBuyingInRequestEventObject {
  accountId: BigNumber;
  amountMFS: BigNumber;
  requestId: BigNumber;
}
export type TokensMFSIsBuyingInRequestEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  TokensMFSIsBuyingInRequestEventObject
>;

export type TokensMFSIsBuyingInRequestEventFilter =
  TypedEventFilter<TokensMFSIsBuyingInRequestEvent>;

export interface Request extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RequestInterface;

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
    acceptGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    airdropPoolCoeffs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createRequestMFS(
      _amountUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteRequestMFS(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAmountUSDRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    getIdRequester(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { requesterId: BigNumber }>;

    getNextLevel(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { levelQueue: BigNumber }>;

    getNextRequestId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { requestId: BigNumber }>;

    getNumberInQueue(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numberInQueue: BigNumber }>;

    getRequestIdsFromQueue(
      _pageSize: PromiseOrValue<BigNumberish>,
      _pageNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { requestId: BigNumber[] }>;

    getRequestsIdsForUser(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    minimumRequestUSD(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownersRequests(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { front: BigNumber; back: BigNumber }>;

    realizeMFS(
      amountMFS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestInQueue(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { level: number; number: BigNumber }>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        requesterId: BigNumber;
        startAmountUSD: BigNumber;
        buyedMFS: BigNumber;
        spentUSD: BigNumber;
        amountUSD: BigNumber;
        status: number;
      }
    >;

    setAirdropPoolCoeffs(
      _level: PromiseOrValue<BigNumberish>,
      _coeff: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinimumRequestUSD(
      _minimumRequestUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transitGovernance(
      newGovernor: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGovernance(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  airdropPoolCoeffs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createRequestMFS(
    _amountUSD: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteRequestMFS(
    _requestId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAmountUSDRequest(
    requestId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIdRequester(
    requestId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNextLevel(overrides?: CallOverrides): Promise<BigNumber>;

  getNextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberInQueue(
    _requestId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequestIdsFromQueue(
    _pageSize: PromiseOrValue<BigNumberish>,
    _pageNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getRequestsIdsForUser(
    userId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  governor(overrides?: CallOverrides): Promise<string>;

  initialize(
    _registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  minimumRequestUSD(overrides?: CallOverrides): Promise<BigNumber>;

  ownersRequests(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  queues(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { front: BigNumber; back: BigNumber }>;

  realizeMFS(
    amountMFS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestInQueue(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { level: number; number: BigNumber }>;

  requests(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      requesterId: BigNumber;
      startAmountUSD: BigNumber;
      buyedMFS: BigNumber;
      spentUSD: BigNumber;
      amountUSD: BigNumber;
      status: number;
    }
  >;

  setAirdropPoolCoeffs(
    _level: PromiseOrValue<BigNumberish>,
    _coeff: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinimumRequestUSD(
    _minimumRequestUSD: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transitGovernance(
    newGovernor: PromiseOrValue<string>,
    force: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    airdropPoolCoeffs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createRequestMFS(
      _amountUSD: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deleteRequestMFS(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAmountUSDRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIdRequester(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextLevel(overrides?: CallOverrides): Promise<BigNumber>;

    getNextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberInQueue(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestIdsFromQueue(
      _pageSize: PromiseOrValue<BigNumberish>,
      _pageNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getRequestsIdsForUser(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    governor(overrides?: CallOverrides): Promise<string>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    minimumRequestUSD(overrides?: CallOverrides): Promise<BigNumber>;

    ownersRequests(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { front: BigNumber; back: BigNumber }>;

    realizeMFS(
      amountMFS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestInQueue(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { level: number; number: BigNumber }>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        requesterId: BigNumber;
        startAmountUSD: BigNumber;
        buyedMFS: BigNumber;
        spentUSD: BigNumber;
        amountUSD: BigNumber;
        status: number;
      }
    >;

    setAirdropPoolCoeffs(
      _level: PromiseOrValue<BigNumberish>,
      _coeff: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumRequestUSD(
      _minimumRequestUSD: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transitGovernance(
      newGovernor: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GovernanceTransited(address,address)"(
      governor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): GovernanceTransitedEventFilter;
    GovernanceTransited(
      governor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): GovernanceTransitedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "PendingGovernanceTransition(address,address)"(
      governor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): PendingGovernanceTransitionEventFilter;
    PendingGovernanceTransition(
      governor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): PendingGovernanceTransitionEventFilter;

    "TokensMFSIsBuyingInRequest(uint256,uint256,uint256)"(
      accountId?: PromiseOrValue<BigNumberish> | null,
      amountMFS?: null,
      requestId?: null
    ): TokensMFSIsBuyingInRequestEventFilter;
    TokensMFSIsBuyingInRequest(
      accountId?: PromiseOrValue<BigNumberish> | null,
      amountMFS?: null,
      requestId?: null
    ): TokensMFSIsBuyingInRequestEventFilter;
  };

  estimateGas: {
    acceptGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    airdropPoolCoeffs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createRequestMFS(
      _amountUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteRequestMFS(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAmountUSDRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIdRequester(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextLevel(overrides?: CallOverrides): Promise<BigNumber>;

    getNextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberInQueue(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestIdsFromQueue(
      _pageSize: PromiseOrValue<BigNumberish>,
      _pageNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestsIdsForUser(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    minimumRequestUSD(overrides?: CallOverrides): Promise<BigNumber>;

    ownersRequests(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    realizeMFS(
      amountMFS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestInQueue(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAirdropPoolCoeffs(
      _level: PromiseOrValue<BigNumberish>,
      _coeff: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinimumRequestUSD(
      _minimumRequestUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transitGovernance(
      newGovernor: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    airdropPoolCoeffs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createRequestMFS(
      _amountUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteRequestMFS(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAmountUSDRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIdRequester(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberInQueue(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestIdsFromQueue(
      _pageSize: PromiseOrValue<BigNumberish>,
      _pageNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestsIdsForUser(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    minimumRequestUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownersRequests(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    realizeMFS(
      amountMFS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestInQueue(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAirdropPoolCoeffs(
      _level: PromiseOrValue<BigNumberish>,
      _coeff: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumRequestUSD(
      _minimumRequestUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transitGovernance(
      newGovernor: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
