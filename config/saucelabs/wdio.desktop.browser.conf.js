let SAUCE_USERNAME = process.env.SAUCE_USERNAME;
let SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;

const config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================

    user: SAUCE_USERNAME,
    key: SAUCE_ACCESS_KEY,
    name: "VodQA tests",
    specs: [
        './tests/specs/browser.*.js'
    ],
    suites: {
        DataSetUp: [

        ]
    },
    capabilities: [
        {
            browserName: 'chrome',
          //  tunnelIdentifier: "test",
            maxInstances: 1
        }
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
        require: ['@babel/register'],
    },
    sync: true,
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 110000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 5,
    reporters: ['spec'],
    services: [
        ['sauce', {
            sauceConnect: true,
            sauceConnectOpts: {
                noAutodetect: false,
               // tunnelIdentifier: "test"
            }
        }]
    ],
    port: 4723,
    region: "eu"
};

delete config.port;
exports.config = config;
