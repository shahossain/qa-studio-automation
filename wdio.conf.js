const { execFileSync } = require('child_process');
const { join } = require('path');
import Data from "../qa-studio-automation/test/pages/data/common"

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
    connectionRetryCount: 5,

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
        manifest: Data.manifestUrl,
        debuggerPort: 9090
    },

    onPrepare: function () {
        execFileSync(join(__dirname, './onPrep.bat'));
     }
}