// Karma configuration
// Generated on Wed Apr 20 2016 16:19:43 GMT+0800 (中国标准时间)
let development = process.env.NODE_ENV == 'development';
// const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision
// const Downloader = require('puppeteer/utils/ChromiumDownloader')
// const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision)
//
// process.env.CHROME_BIN = revisionInfo.executablePath
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['CustomChromeHeadless'],

    customLaunchers: {
      CustomChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--disable-web-security', '--user-data-dir', '--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
      }
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    webpack: {
      devtool: 'source-map',
      resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.json', '.less']
      },
      externals:  [
      ],
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|test/
          }, {
            test: /\.jsx?$/,
            // include: /jasmine-enzyme|enzyme-matchers|src|test/,
            // exclude: /node_modules/,
            use: 'babel-loader'
          }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ['css-loader', 'postcss-loader', 'less-loader']
          }, {
            test: /\.less$/,
            use: ['css-loader', 'postcss-loader', 'less-loader']
          }
        ]
      }
    },
    webpackMiddleware: {
      quiet: true,
      stats: {
        noInfo: true,
        chunks: false,
        assets: false
      }
    },
    plugins: [
      'webpack',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-coverage-istanbul-reporter'
    ],
    // list of files to exclude
    exclude: [
      // 'src/server/**/*.js*',
      // 'src/*.js*'
    ],
    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js',
      'src/**/*.js*'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*': ['webpack', 'sourcemap'],
      'src/**/*': ['webpack', 'sourcemap'],
    },
    reporters: [ 'progress', 'coverage-istanbul' ],
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    // reporters: ['progress', 'coverage'],
    // coverageReporter: {
    //   reporters: [
    //     {type: 'text-summary'},
    //     {type: 'html', dir: 'coverage/'}
    //   ]
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !development,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
