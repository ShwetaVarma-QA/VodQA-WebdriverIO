const { join } = require('path');

exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/specs/**/browser.*.js'
    ],

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    // First, you can define how many instances should
    // be started at the same time
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    // ===================
    // Test Configurations
    // ===================

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    // run your tests until a specific amount of tests have failed use bail
    bail: 0,

    // Set a base URL in order to shorten url command calls
    baseUrl: 'http://the-internet.herokuapp.com',

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,

    // Default request retries count
    connectionRetryCount: 3,

    // Test runner services
    services: ['chromedriver', 'devtools', [ 'image-comparison',
        // The options
        {
            // Some options, see the docs for more
            baselineFolder: join(process.cwd(), './baseline/'),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: join(process.cwd(), './baseline/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // NOTE: When you are testing a hybrid app please use this setting
            isHybridApp: true,
            // Options for the tabbing image
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line:{
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            }
            // ... more options
        }]],

    // Framework supported: Mocha, Jasmine, and Cucumber
    framework: 'mocha',

    reporters: [
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    // Options to be passed to framework
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
        require: ['@babel/register'],
    },
}
