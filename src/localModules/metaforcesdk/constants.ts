import { BigNumber, ethers } from 'ethers';

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

export const REGISTRY_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x2ff1253a3e4104f46d210aecad3f0e56ebc400f6",
  [ChainId.PolygonTestnet]: "0x4aec3392c96ea0beefe88c0d6532ad487a9bef9c",
};
export const METACORE_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x1a9f5fd1b36f8d1e03f0ff6eabbbb268f053033e",
  [ChainId.PolygonTestnet]: "0x7e3741b142f3c2243998c8f646d5d1f824fbe0ed",
};
export const METAPAYMENT_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x6fcb55c09671bd0d28b5a0e9d303793ac005f19c",
  [ChainId.PolygonTestnet]: "0xfe0e8d23911075b35210b9c73ba34f4c476b8237",
};
export const CORE_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x002d75b00f785f5de725babc8cf63ca2ad146b80",
  [ChainId.PolygonTestnet]: "0xc099d28a2211ba3eb64d72847ca9afb25f660b90",
};
export const HOLDING_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xdc13d7f188809007678b057e552ab1d8b0afe757",
  [ChainId.PolygonTestnet]: "0xfa566a2af92a2ed391346982ac57c91e797b6fce",
};
export const METAFORCE_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x52ba99de14897356d008868f68afbb3cde49deec",
  [ChainId.PolygonTestnet]: "0x1e674fb0a97350fb0b5d71d544934e20db744d08",
};
export const REQUEST_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xd9bF32742c83081f497bc715bDc4AC817cfC3963",
  [ChainId.PolygonTestnet]: "0x968dde456ee06369f64629d857f4e7c04c18bb9f",
};
export const MFS_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x762d3d096b9a74f4d3adf2b0824456ef8fce5daa",
  [ChainId.PolygonTestnet]: "0xADD10fbe4a98D816464bB2C0e1C356891d617f75",
};
export const DAI_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  [ChainId.PolygonTestnet]: "0x57214ae2ae7dee6067cb65e8abd2fe6d2499a2b6",
};
export const ENERGY_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x411b73bee098fb5cb7132f63dcc02c547101f6c6",
  [ChainId.PolygonTestnet]: "0x7Faae08722d9867930893633371f715A700834ac",
};
export const HMFS1_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x5295f96dbcf441a620d60d03912cc40885121f51",
  [ChainId.PolygonTestnet]: "0x353Cb6Ad8bc43846A2CB790e3aa668F76C947Efe",
};
export const HMFS2_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x34f7c8778b5aab008e5b32cc067b543aa42a259e",
  [ChainId.PolygonTestnet]: "0x7a618f7b16062D1454D288d0D1d571c197e31585",
};
export const HMFS3_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x5839bdfd3eec003181d098c650fd9419ffd03721",
  [ChainId.PolygonTestnet]: "0xeC4b491d18F660724082CD65314b5398B751eEAa",
};
export const HMFS4_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x6bdbde66ac6649f6d72790ee351fbc7ef785ade8",
  [ChainId.PolygonTestnet]: "0xeE7d3bDEC8768AebFf371B9223164B7cC8Be536e",
};
export const HMFS5_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x17e663f3339d0c3e421262a5bfc6fbceaf1882c1",
  [ChainId.PolygonTestnet]: "0xEdeAF4F90e0EA06c4abE1C5Ed6cda1403A91edB7",
};
export const HMFS6_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x387d6914569c0ab4bb02754304117010206dc862",
  [ChainId.PolygonTestnet]: "0x38D114936e84Afef9117dCFb11B2e28f8b40EA5e",
};
export const HMFS7_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xcc507cb00190e70f77247051c1508c880a9710ef",
  [ChainId.PolygonTestnet]: "0x09962f331De03E9A26AB2d37e2E7477c3dB1F6B1",
};
export const HMFS8_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x74842fe52cbdc151673419b9d2c7bbe9c55dcc2f",
  [ChainId.PolygonTestnet]: "0x36B746eC540d3F58608F9599F636BBF17AD2375E",
};
// Геймификация UV
export const QW_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x61573898cbd12398e1f90a12f1c9d951d532e30d",
  [ChainId.PolygonTestnet]: "0xf9C4174d3b3DA5EB8B52DBdD3e193339DcB59028",
};
export const EQN_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xd1ca5628147f8a3f5dd506244715cff24014b727",
  [ChainId.PolygonTestnet]: "0xc1c2E740e74Df68Ea27E928870E83F63Bd5F3F76",
};
export const QEN_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x488d03e0348b73a1cc9054415cc8457135abb845",
  [ChainId.PolygonTestnet]: "0xb4A7cCa61541323b7AD875617Ee9757923F21907",
};
export const QRE_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x0eeb716cc5003fd2678a07969e83a3e4b604a3fc",
  [ChainId.PolygonTestnet]: "0x73Bc182bEf4b5AD261ee652B04025233f7128706",
};

// мини игра UV
export const BUTTON_APP_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xa863497d31518a7a98b88f8652ce7e9ad867f3b5",
  [ChainId.PolygonTestnet]: "0x9995698ec31551bb9838c197e02475c887ef0bbb",
};

// Новые контракты
export const NFT_CHIP1_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xa736884e6906c215501cdac091c1783f5b7fc078",
  [ChainId.PolygonTestnet]: "0x041a858b61a0458f87c6b514caeaa6af434604d5",
};
export const NFT_CHIP2_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x386db833c8db141db4b116120b5552c60d98f299",
  [ChainId.PolygonTestnet]: "0xc24019c1a595f40060de25cc38ada7ba30c1337f",
};
export const NFT_CHIP3_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xb8eeb56a491708b2f78fc7425feecd826896a252",
  [ChainId.PolygonTestnet]: "0x0cc602b3abda208f269065b860bd16a10168ed8a",
};
export const NFT_CHIP4_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xe2d759095b7bd0082c0d9bc776c223e5b3d7ec4d",
  [ChainId.PolygonTestnet]: "0x18d75399ea17d33c22137888eaf085a20a51f366",
};
export const NFT_CHIP5_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x6c72093c804cec9148b3fb08fe7ea23b4acee2a4",
  [ChainId.PolygonTestnet]: "0x87a6cd3711be8cf7eabf3bac346be121cc033315",
};
export const NFT_CHIP6_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xae0379ddd83d55ccc35f362a67d5dd234ee2532e",
  [ChainId.PolygonTestnet]: "0x34f39bc4a2bda1dfa33d05477f7eb5e699516ec6",
};
export const NFT_CHIP7_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x8cfe94623856e3a004a77699ece68f92c93c42be",
  [ChainId.PolygonTestnet]: "0x559148063263990beb2a84ea23be88e60303a145",
};
export const NFT_CHIP8_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0xfe14983c9b1d9d7d243261b5a0ad91c0b0f7c45c",
  [ChainId.PolygonTestnet]: "0xc80cd2f3a6dc7f4581f923291507637478e253fe",
};
export const NFT_CHIP9_ADDRESSES = {
  [ChainId.PolygonMainnet]: "0x03b25833d10ff7b191e1b3300661943f13c2d68c",
  [ChainId.PolygonTestnet]: "0xd400cdd5eef2dd3352455a3de9d10fb287392dcd",
};
export const FORCESWAP_ADDRESS = {
  [ChainId.PolygonMainnet]: "0x7e1263c92b997f42d9ef668bbc8ba213bd4ca08a",
  [ChainId.PolygonTestnet]: "0xf073939725c45b078f40d254d0f9363995f9411f",
};
export const EXCHANGE_CONTROLLER_ADDRESS = {
  [ChainId.PolygonMainnet]: "0xea5f475e3f1b81a2536a30b41e17fb642f32b254",
  [ChainId.PolygonTestnet]: "0xa7e7a534448449c838056F1F4995E33A608D0562",
};
export const BUYBACK_POOL_ADDRESS = {
  [ChainId.PolygonMainnet]: "0x56d12c9d7a0bbb73b850827aa96b4e40d3c7bd34",
  [ChainId.PolygonTestnet]: "0xBe7e916B42BEb4BA9Ae830aA05308413FFc9e936",
};
export const NFT_GRAPHQL_ENDPOINTS = {
  [ChainId.PolygonMainnet]: "https://market.holiverse.ai/api/v1/graphql",
  [ChainId.PolygonTestnet]: "https://gamma-3.market.metaforcespace.website/api/v1/graphql",
};
export const URL_SQUID = {
  [ChainId.PolygonMainnet]: "https://uv.holiverse.ai/graphql",
  [ChainId.PolygonTestnet]: "https://unite.metaforcespace.website/graphql",
};

export const VESTING_FUND_ADDRESS = {
  [ChainId.PolygonMainnet]: "0xd3356dc7c81f02fd767fe171b86a3748929fa5e3",
  [ChainId.PolygonTestnet]: "0xeEf9790C029A35AECF11275B40255B31A1915Fd3",
};

export const DO_SPACES = {
  URL: "https://metaforce-hub.fra1.digitaloceanspaces.com",
  AVATARS_FOLDER: "/avatars",
  IMG_FORMAT: ".jpg",
};

export const MAX_TIMESTAMP = 8640000000;

export const DECIMALS = 18;

export const FIRST_PACK_PRICE_IN_USD: BigNumber = ethers.utils.parseUnits("50");

export const LEVELS_COUNT = 9;

export const COEFF_INCREASE_COST_PACK_FOR_NEXT_LEVEL = 2;

export const ACTIVATION_COST_RATIO_TO_RENEWAL = 5;

export const HMFS_COUNT = 8;

export const ONE: BigNumber = ethers.utils.parseUnits("1");

export const META_ROLE =
  "0xa9ce9b5120c53e0d8b4fe6e0814a47efbead9ebc4d29ec54571f37f0b61ecf0f";

export const META_FORCE_CONTRACT_ROLE =
  "0x50cf39c8fa39275243850e894fcd4b72000d4f0b08c3de0e36d7f1d1718942da";

export const MINTER_ROLE =
  "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
export const BURNER_ROLE =
  "0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848";

export const UV_V2_UPGRADE_DT: Date = new Date("2024-04-14T15:12:57Z");

// время жизни волны
export const WAVE_ACTIVE_PERIOD_BEFORE_728 = {
  [ChainId.PolygonMainnet]: 1000 * 60 * 60 * 24 * 51, // 51 дней
  [ChainId.PolygonTestnet]: 1000 * 60 * 60 * 1, // 1 час
};

export const WAVE_ACTIVE_PERIOD_AFTER_728 = {
  [ChainId.PolygonMainnet]: 1000 * 60 * 60 * 24 * 30, // 30 дней
  [ChainId.PolygonTestnet]: 1000 * 60 * 60 * 1, // 1 час
};

