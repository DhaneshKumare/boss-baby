
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/boss-baby/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/boss-baby"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: 'f910c5264f8908bb2e9fbf8e95169b697df2d731d686f10d3836d51cf8c571c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '689711e7c6a2d1b4ead4aad9c9b0968fff7d50afe11a1febbbe82acb7bcd51ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20846, hash: 'debe199016358919f1ace74bbd55a2dfa2b2190f789a23093ea5b3456eb28d41', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
