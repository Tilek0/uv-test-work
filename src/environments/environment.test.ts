const team = 'TEAM_NAME_REPLACEMENT_TOKEN' // Will be replaced in Dockerfile

export const environment = {
  production: true,
  hmr: false,
  projectId: 'e1294c6e3535640be87d5beedf3bbd7b',
  team: team,
  apiUrl: 'NOT USED',
  menuUrl: {
    dashboard: `https://tactile.metaforcespace.website/dashboard`,
    home: `https://tactile.metaforcespace.website/systems`,
    referral: `https://tactile.metaforcespace.website/systems/referral`,
    academy: `https://tactile.metaforcespace.website/academy`,
    settings: `https://tactile.metaforcespace.website/settings`,
    help: `https://tactile.metaforcespace.website/help`,
    messenger: `https://tactile.metaforcespace.website/messenger`,
    uniteverse: `https://${team}.unite.metaforcespace.website/pages/overview`,
    forcecoin: `https://${team}.unite.metaforcespace.website/pages/forcecoin`
  },
  forceSystemsUrl: 'https://tactile.metaforcespace.website/systems',
  innerBalance: 'https://ib.metaforcespace.website/connect-wallet?id=',
  referralUrl: 'https://tactile.metaforcespace.website/r/',
  marketplaceUrl: 'https://market.proksy.io',
  dexUrl: `https://alpha-1.market.metaforcespace.website`,
  url: `https://${team}.metaforcespace.website/`,
  metaCoreNotRegistered: 'https://tactile.metaforcespace.website/r/MetaForce',
  storageClearAppVersion: '1.0.0',
  verBuild: 10,
  promotionTime:'07.09.2024',// Месяц.день.год
  isExchange:true, // флаг для подтягивания текущего курса mfs при бирже
  SlippageTolerance:5,//допустимый процент изменения суммы
};
