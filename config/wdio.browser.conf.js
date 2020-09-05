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
    logLevel: 'silent',

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
    services: ['chromedriver'],

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
