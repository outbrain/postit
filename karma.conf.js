'use strict';

/*
* Karam Config.
* @see https://github.com/karma-runner/karma/blob/master/docs/config/01-configuration-file.md
*/

module.exports = function (config) {
  config.set({
    // Base path that will be used to resolve all patterns.
    basePath: '',

    // Frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'browserify'],

    // Patterns to load in the browser.
    files: [
      'lib/**/*.js'
    ],

    // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
    browserNoActivityTimeout: 60000,

    // List of files to exclude.
    exclude: [],

    // Preprocess matching files before serving them to the browser.
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'lib/**/!(*.unit).js': ['browserify', 'coverage'],
      'lib/**/*.unit.js': ['browserify']
    },

    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'progress'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Web server port.
    port: 9876,

    // Enable/disable colors in the output - reporters and logs.
    colors: true,

    // Logging levels: [config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO, config.LOG_DEBUG]
    logLevel: config.LOG_INFO,

    // Enable/disable watching files.
    autoWatch: false,

    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],

    // Continuous Integration mode.
    singleRun: false
  });
};
