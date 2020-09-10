exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000,
        require: ['@babel/register']
    },
    path: '/wd/hub',
    sync: true,
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
                command: 'appium',
            },
        ],
    ],
    port: 4723,
};
