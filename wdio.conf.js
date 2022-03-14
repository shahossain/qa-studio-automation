const { execFileSync } = require('child_process');
const { join } = require('path');

exports.config = {
    port: 9515,
    path: '/',
    specs: [
        'build/specs/test.js'
    ],

    reporters: ['spec'],
    logLevel: 'warn',
    coloredLogs: true,

    waitforTimeout: 20000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 1,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 999999
    },

    services: [
        ['openfin', {
            logFileName: 'wdio-chromedriver.log',
            outputDir: '.',
            args: ['--verbose']
        }]
    ],
    openfin: {
        manifest: 'fins://cdn.openfin.co/workspace/6.2.4/studio/app.json',
        debuggerPort: 9090
    },

    onPrepare: function () {
        execFileSync(join(__dirname, './onPrep.bat'));
     }
}