export enum RecentOperationsType {
    Sell,
    Buy,
    Buyback,
}

export interface RecentOperationsRow {
    id: string | null;
    date: Date;
    mfsAmount: string;
    daiAmount: string;
    status: string;
    txHash: string;
    blockExplorerUrl: string;
}