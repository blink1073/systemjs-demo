System.config({
  transpiler: null,
  paths: {
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js'
  },
  map: {
    'phosphor-domutil': 'node_modules/phosphor-domutil/lib/index.js',
    'phosphor-signaling': 'node_modules/phosphor-signaling/lib/index.js',
    'phosphor-widget': 'node_modules/phosphor-widget/lib/index.js',
    'phosphor-properties': 'node_modules/phosphor-properties/lib/index.js',
    'phosphor-arrays': 'node_modules/phosphor-arrays/lib/index.js',
    'phosphor-disposable': 'node_modules/phosphor-disposable/lib/index.js',
    'phosphor-messaging': 'node_modules/phosphor-messaging/lib/index.js',
    'phosphor-nodewrapper': 'node_modules/phosphor-nodewrapper/lib/index.js',
    'phosphor-queue': 'node_modules/phosphor-queue/lib/index.js',
    'phosphor-menus': 'node_modules/phosphor-menus/lib/index.js'
  },
  packages: {
    '.': {
      defaultExtension: 'js',
      meta: {
        '*.css': {
          loader: 'node_modules/system-css/css.js'
        },
        '*.json': {
          loader: 'node_modules/systemjs-plugin-json/json.js'
        }
      }
    }
  }
});
