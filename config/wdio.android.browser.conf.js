const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/browser*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
        // The defaults you need to have in your config

    {
        platformName: 'Android',
        maxInstances: 1,
        'browserName': 'chrome',
        'appium:deviceName': 'Pixel 2 API 29',
        'appium:platformVersion': '10.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 240
        // 'goog:chromeOptions': {
        //     w3c: true,
        //     // Add this option to prevent the annoying "Welcome"-message
        //     args: ['--no-first-run'],
        // }
    },
];

exports.config = config;
