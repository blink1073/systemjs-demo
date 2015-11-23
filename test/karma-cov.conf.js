module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['systemjs', 'mocha'],
    reporters: ['mocha', 'coverage'],
    files: ['test/test.js'],
    preprocessors: {
      'sub/*.js': ['coverage'],
    },
    coverageReporter: {
      reporters : [
        { 'type': 'text' },
        { 'type': 'lcov', dir: 'test/coverage' },
        { 'type': 'html', dir: 'test/coverage' }
      ]
    },
    files: ['test/test.js'],
    systemjs: {
      configFile: ['test/system.conf.js'],
      serveFiles: [
        '*.*',
        'sub/*.*',
        'node_modules/**/*.*'
      ],
    },
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
