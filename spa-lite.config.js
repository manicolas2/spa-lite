const app = {
  title: 'LBWDG Demo',
  shortName: 'SPA Lite',
  description: 'This is a test'
};

const theme = {
  webApp: {}
};

const fragments = {
  'page-home': 'src/pages/page-home/index.js',
  'page-not-found': 'src/pages/page-not-found/index.js'
};

const routes = [
  {
    route: '/',
    page: 'page-home'
  },
  {
    route: 'no-page',
    page: 'page-not-found'
  }
];

module.exports = { app, theme, fragments, routes };
