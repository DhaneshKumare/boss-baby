
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
    'index.csr.html': {size: 503, hash: 'f6c94f18e242865762fea215f30c8ce1cc181fe0803ded30c8e2ae3bf21a2bd6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'c462c40fceca755ed3c957d46ec20b94a42ab25b16863f1e5c5dd3c5f5cdc436', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 644, hash: 'd0b2ff65f79e9608e900e38ae6d2e6e0dabba17718fc572717a78e701b7a1d31', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
