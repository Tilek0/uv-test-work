import { CoreMenu } from '@core/types';
import { environment } from '../../environments/environment';

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    img: '/assets/menu icon/home.svg',

    externalUrl: true,
    url: environment.menuUrl.dashboard,
  },
  {
    id: 'Forcesystem',
    title: 'Force system',
    translate: 'MENU.FORCE_SYSTEM',
    type: 'item',
    img: '/assets/menu icon/ForseSystem.svg',
    externalUrl: true,
    url: environment.menuUrl.home,
  },
  {
    id: 'Uniteverse',
    title: 'Uniteverse',
    translate: 'MENU.UNITEVERSE',
    type: 'item',
    img: '/assets/menu icon/uniteverse.svg',
    externalUrl: true,
    url: environment.menuUrl.uniteverse,
  },
  {
    id: 'Holichain',
    title: 'Holichain',
    translate: 'MENU.FORCECOIN',
    type: 'item',
    img: '/assets/menu icon/holicoin.svg',
    externalUrl: true,
    url: environment.menuUrl.forcecoin,
  },
  {
    id: 'Myteam',
    title: 'My team',
    translate: 'MENU.MY_TEAM',
    type: 'item',
    img: '/assets/menu icon/Myteam.svg',
    externalUrl: true,
    url: environment.menuUrl.referral,
  },

  {
    id: 'Messenger',
    title: 'Messenger',
    translate: 'MENU.MESSENGER',
    type: 'item',
    img: '/assets/menu icon/messenger.svg',
    externalUrl: true,
    url: environment.menuUrl.messenger,
    status: {
      translate: 'MENU.BADGE_MESSENGER',
      classes: 'status-badge-beta',
    },
  },
  // {
  //   id: 'Academy',
  //   title: 'Academy',
  //   translate: 'MENU.ACADEMY',
  //   type: 'item',
  //    img: '/assets/menu icon/Academy.png',
  //   externalUrl:true,
  //   url: environment.menuUrl.academy
  // },
  {
    id: 'Help',
    title: 'Help',
    translate: 'MENU.HELP',
    type: 'item',
    img: '/assets/menu icon/Help.svg',
    externalUrl: true,
    url: environment.menuUrl.help,
  },
  {
    id: 'Settings',
    title: 'Settings',
    translate: 'MENU.SETTINGS',
    type: 'item',
    img: '/assets/menu icon/settings.svg',
    externalUrl: true,
    url: environment.menuUrl.settings,
  },

  {
    id: 'SocialMetaForce',
    title: 'Social Holiverse',
    translate: 'MENU.SOCIAL_META_FORCE',
    type: 'collapsible',
    img: '/assets/menu icon/social.svg',
    externalUrl: false,
    isCollapsibleSocial: true,
    children: [
      {
        id: 'SocialMetaForce',
        title: 'YouTube',
        type: 'item',
        img: 'assets/images/icons/youtube.png',
        externalUrl: true,
        url: 'https://www.youtube.com/@MetaFORCESpace',
      },
      {
        id: 'SocialMetaForce',
        title: 'Discord',
        type: 'item',
        img: 'assets/images/icons/discord.png',
        externalUrl: true,
        url: 'https://discord.gg/yZYzwpJeWg',
      },
      {
        id: 'SocialMetaForce',
        title: 'Telegram',
        type: 'item',
        img: 'assets/images/icons/telegram.png',
        externalUrl: true,
        url: 'https://t.me/MetaForceSpace',
      },
      {
        id: 'SocialMetaForce',
        title: 'Twitter',
        type: 'item',
        img: 'assets/images/icons/twiter.png',
        externalUrl: true,
        url: 'https://twitter.com/MetaForceSpace',
      },
      {
        id: 'SocialMetaForce',
        title: 'Instagram',
        type: 'item',
        img: 'assets/images/icons/instagram.png',
        externalUrl: true,
        url: 'https://www.instagram.com/metaforcespace/',
      },
    ],
  },
];

export const tabsMenu = [
  {
    value: 'machines',
    title: 'prepare',
  },
  {
    value: 'waves',
    title: 'quantum_waves',
  },
  {
    value: 'bitforce',
    title: 'bitforce',
    disabled: true,
  },
];
