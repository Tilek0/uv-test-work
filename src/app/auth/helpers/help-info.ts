import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { JsonRpcSigner } from '@ethersproject/providers';
import { environment } from 'environments/environment';

import { UserInfo, Stats, Tokens } from 'localModules/metaforcesdk/types';

import moment from 'moment';

import { BehaviorSubject } from 'rxjs';

export interface walletInfo {
  signer: JsonRpcSigner;
  isConnect: boolean;
  chainId: number;
}

export const chainIdList = {
  polygonMainnet: 137,
  polygonTestnet: 80002,
};

export const recentActivity = [
  'TierActivated',
  'TierExtended',

  'NewReferral',

  'GetedForceCoin',

  'DeltaActivation',

  'ReferralRevenueMFSForActivatedTier',
  'ReferralRevenueStableForActivatedTier',

  'ReferralRevenueMFSForRenewTier',
  'ReferralRevenueStableForRenewTier',

  'MarketingRevenueMFSForActivatedTier',
  'MarketingRevenueStableForActivatedTier',

  'MarketingRevenueMFSForRenewTier',
  'MarketingRevenueStableForRenewTier',

  'ReferralLostMoney',
  'MarketingLostMoney',
];

export interface recentActivityDetailItem {
  type: {
    name: string;
    url: string;
    textPath1: string;
    level?: number;
    textPath2?: string;
    description?: string;
  };
  force_id: {
    isMy: boolean;
    avatar: string;
    id: string;
    nickName: string;
  };
  wallet: string;
  program: string;
  date: {
    date: string;
    time: string;
  };
  amount: string;
  isCopyWallet: boolean;
  isCopyId: boolean;
}

export interface recentActivityItem {
  type: {
    name: string;
    url: string;
    textPath1: string;
    level?: number;
    textPath2?: string;
  };
  force_id: {
    isMy: boolean;
    avatar: string;
    id: string;
  };
  date: string;
  amount: string;
}
export interface userDetail {
  new?: boolean;
  userId: number;
  walletAddress: string;
  tier: number;
  profitDAI: string;
  profitMFS: string;
  date: string;
}

export interface serviceItem {
  url: string;
  img: string;
  name: string;
  description: string;
}

export interface sideNavControl {
  isOpen: boolean;
  type: sideNavType;
  childs?: any[];
  item?: any;
  isReservedAddress?: boolean;
}

export interface getMFSOrhMFS
{
  depositId:number;
  amount:number;
  result:boolean
}
export enum sideNavType {
  menu,
  services,
  social,
  language,
  wallet,
  walletHistory,
  walletVesting,
  transfer,
  inner,
  notification,
  sell,
  buyback,
  buybackOfferPrice,
  buy,
  holdMFS,
  holdMFSWallet,
  swaphMFSOnMFS
}
export enum StatusRequest {
  Pending,
  Approved,
  Declined,
}

export const languageList = {
  en: {
    title: 'EN',
    flag: 'us',
  },
  zh: {
    title: 'CN',
    flag: 'zh',
  },
  hi: {
    title: 'HI',
    flag: 'hi',
  },
  ru: {
    title: 'RU',
    flag: 'ru',
  },
  vi: {
    title: 'VI',
    flag: 'vi',
  },
  ar: {
    title: 'AR',
    flag: 'ar',
  },

  id: {
    title: 'ID',
    flag: 'id',
  },
  ur: {
    title: 'UR',
    flag: 'ur',
  },
  fr: {
    title: 'FR',
    flag: 'fr',
  },
};

export const serviceList: serviceItem[] = [
  {
    url: 'https://holiverse.ai/home',
    img: '/assets/serveces icon/home.svg',
    name: 'HOME',
    description: 'DESCRIPTION_NEWS_EVENTS',
  },
  {
    url: 'https://holiverse.ai/news-portal/',
    img: '/assets/serveces icon/news.svg',
    name: 'NEWS_EVENTS',
    description: 'DESCRIPTION_NEWS_EVENTS',
  },
  {
    url: 'https://holiverse.ai/systems',
    img: '/assets/serveces icon/force.svg',
    name: 'FORCE_SYSTEMS',
    description: 'DESCRIPTION_FORCE_SYSTEMS',
  },
  {
    url: 'https://academy.meta-force.space/',
    img: '/assets/serveces icon/academy.svg',
    name: 'ACADEMY',
    description: 'ACADEMY',
  },
  {
    url: 'https://holiverse.ai/contests',
    img: '/assets/serveces icon/contests.svg',
    name: 'CONTESTS',
    description: 'COMMING_SOON',
  },

  {
    url: 'https://market.meta-force.space',
    img: '/assets/serveces icon/nftMarcketplace.svg',
    name: 'NFTS_MARKETPLACE',
    description: 'NFTS_MARKETPLACE',
  },
  {
    url: 'https://dex.holiverse.ai',
    img: '/assets/serveces icon/metaverce.svg',
    name: 'FORCEDEX',
    description: 'NFTS_MARKETPLACE',
  },
  {
    url: '',
    img: '/assets/serveces icon/metaverce.svg',
    name: 'METAVERCE',
    description: 'COMMING_SOON',
  },
];
export const otherServiceList: serviceItem[] = [
  {
    url: '',
    img: '/assets/serveces icon/promotion.svg',
    name: 'PROMOTION',
    description: 'COMMING_SOON',
  },
  {
    url: '',
    img: '/assets/serveces icon/managementlinks.svg',
    name: 'MANAGEMENT_LINKS',
    description: 'COMMING_SOON',
  },
];

@Injectable({ providedIn: 'root' })
export class HelpInfo {
  maticPrice: BehaviorSubject<number> = new BehaviorSubject(null);
  expectainModalIsOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHold: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isGetMFSOrhMFS: BehaviorSubject<getMFSOrhMFS> = new BehaviorSubject({depositId:-1,result:false,amount:-1});
  expectainModalStep: BehaviorSubject<number> = new BehaviorSubject(1);
  tokenAddress: BehaviorSubject<Tokens> = new BehaviorSubject(null);
  walletAddress: BehaviorSubject<string> = new BehaviorSubject('');
  userId: BehaviorSubject<number> = new BehaviorSubject(null);
  walletInfo: BehaviorSubject<walletInfo> = new BehaviorSubject(null);
  userInfo: BehaviorSubject<UserInfo> = new BehaviorSubject(null);
  stats: BehaviorSubject<Stats> = new BehaviorSubject(null);
  unitedVerseContractsAddresses: BehaviorSubject<string[]> =
    new BehaviorSubject([]);
  isOpenSlideNavMain: BehaviorSubject<sideNavControl> = new BehaviorSubject({
    isOpen: false,
    type: sideNavType.menu,
  });
  isOpenSlideNavSecondary: BehaviorSubject<sideNavControl> =
    new BehaviorSubject({ isOpen: false, type: sideNavType.social });
  isOpenSlideNavThird: BehaviorSubject<sideNavControl> = new BehaviorSubject({
    isOpen: false,
    type: sideNavType.wallet,
  });
  public getImage(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        resolve(url);
      };
      img.onerror = function () {
        reject(undefined);
      };
    });
  }
}
