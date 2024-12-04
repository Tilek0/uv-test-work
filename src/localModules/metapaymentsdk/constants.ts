export enum ChainId {
  PolygonMainnet = 137,
  PolygonTestnet = 80002,
}

export const RPC_URLS = {
  [ChainId.PolygonMainnet]: 'https://polygon-rpc.meta-force.space',
  [ChainId.PolygonTestnet]:"https://rpc-amoy.polygon.technology",
};

export const BLOCK_EXPLORERS_URLS = {
  [ChainId.PolygonMainnet]: 'https://polygonscan.com',
  [ChainId.PolygonTestnet]: 'https://amoy.polygonscan.com',
};

export const METACORE_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x1a9f5fd1b36f8d1e03f0ff6eabbbb268f053033e",
    [ChainId.PolygonTestnet]: "0x7e3741b142f3c2243998c8f646d5d1f824fbe0ed",
  // [ChainId.PolygonMainnet]: "0xde432be2a3a93a83d45ff188cCa49fCE577fA8BF",
  // [ChainId.PolygonTestnet]: "0xa1674CDBa6dCc918193C03b8005108a2F38D6fF8",
};

export const METAPAYMENT_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x6fcb55c09671bd0d28b5a0e9d303793ac005f19c",
  [ChainId.PolygonTestnet]: "0xfe0e8d23911075b35210b9c73ba34f4c476b8237",
};

export const DECIMALS = 18;
