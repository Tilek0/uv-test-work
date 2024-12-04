import { Metacore } from './contracts/types/Metacore';
import { Metapayment } from './contracts/types/Metapayment';

export type Balance = {
  token: string;
  frozen: boolean;
  internal: string;
  direct: string;
};

export type Contracts = {
  metaCore: Metacore;
  metaPayment: Metapayment;
};

export type EnoughCoins = {
  enough: boolean;
  amountCoins: string;
};
