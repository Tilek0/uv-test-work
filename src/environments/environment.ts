// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  hmr: false,
  projectId: 'e1294c6e3535640be87d5beedf3bbd7b',
  apiUrl: 'NOT USED',
  menuUrl: {
    dashboard: 'https://holiverse.ai/dashboard',
    home: 'https://holiverse.ai',
    referral: 'https://holiverse.ai/systems/referral',
    academy: 'https://holiverse.ai/academy',
    settings: 'https://holiverse.ai/settings',
    help: 'https://holiverse.ai/help',
    messenger: 'https://holiverse.ai/messenger',
    uniteverse: 'https://uv.holiverse.ai/pages/overview',
    forcecoin: 'https://uv.holiverse.ai/pages/holichain'
  },
  forceSystemsUrl: 'https://holiverse.ai/systems',
  innerBalance: 'https://ib.holiverse.ai/connect-wallet?id=',
  referralUrl: 'https://holiverse.ai/r/',
  marketplaceUrl: 'https://market.meta-force.space',
  dexUrl: "https://dex.holiverse.ai",
  url: `https://holiverse.ai`,
  metaCoreNotRegistered: 'https://holiverse.ai/r/MetaForce',
  storageClearAppVersion: '1.0.0',
  verBuild: 10,
  promotionTime:'07.09.2024',// Месяц.день.год
  isExchange:true, // флаг для подтягивания текущего курса mfs при бирже
  SlippageTolerance:5,//допустимый процент изменения суммы
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
