/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Request, RequestInterface } from "../Request";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "FixedPointMathMulDivOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "GovernedCantGoverItself",
    type: "error",
  },
  {
    inputs: [],
    name: "GovernedGovernorZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "GovernedOnlyGovernorAllowedToCall",
    type: "error",
  },
  {
    inputs: [],
    name: "GovernedOnlyPendingGovernorAllowedToCall",
    type: "error",
  },
  {
    inputs: [],
    name: "MFCStableCoinFactorIsNotCorrect",
    type: "error",
  },
  {
    inputs: [],
    name: "RMFSCAirdropPoolCoeffIncorrect",
    type: "error",
  },
  {
    inputs: [],
    name: "RMFSCAmountUSDIsSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "RMFSCQueueIsEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RMFSCSenderIsNotMetaForceContract",
    type: "error",
  },
  {
    inputs: [],
    name: "RMFSCSenderIsNotOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "GovernanceTransited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "PendingGovernanceTransition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMFS",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "TokensMFSIsBuyingInRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "airdropPoolCoeffs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountUSD",
        type: "uint256",
      },
    ],
    name: "createRequestMFS",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "deleteRequestMFS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getAmountUSDRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getIdRequester",
    outputs: [
      {
        internalType: "uint256",
        name: "requesterId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "levelQueue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextRequestId",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getNumberInQueue",
    outputs: [
      {
        internalType: "uint256",
        name: "numberInQueue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pageSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pageNumber",
        type: "uint256",
      },
    ],
    name: "getRequestIdsFromQueue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "requestId",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "getRequestsIdsForUser",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRegistryContract",
        name: "_registry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumRequestUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownersRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingGovernor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queues",
    outputs: [
      {
        internalType: "uint256",
        name: "front",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "back",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMFS",
        type: "uint256",
      },
    ],
    name: "realizeMFS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestInQueue",
    outputs: [
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "uint248",
        name: "number",
        type: "uint248",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "uint256",
        name: "requesterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startAmountUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buyedMFS",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spentUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountUSD",
        type: "uint256",
      },
      {
        internalType: "enum StatusRequest",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_coeff",
        type: "uint256",
      },
    ],
    name: "setAirdropPoolCoeffs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimumRequestUSD",
        type: "uint256",
      },
    ],
    name: "setMinimumRequestUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "force",
        type: "bool",
      },
    ],
    name: "transitGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Request__factory {
  static readonly abi = _abi;
  static createInterface(): RequestInterface {
    return new utils.Interface(_abi) as RequestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Request {
    return new Contract(address, _abi, signerOrProvider) as Request;
  }
}
