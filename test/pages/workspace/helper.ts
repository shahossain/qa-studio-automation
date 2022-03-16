import Page from '../page'
import * as rm from 'wdio-openfin-service'
import assert from 'assert'

declare var browser:any;
declare var fin:any;

class HelperFunctions extends Page {
    
    // Assertion for whether or not a component is showing
    isShowing = async (expected:boolean) => {
        const result = await browser.executeAsync(function (done) {
            
            const checkShowing = async () => {
                done(await fin.me.isShowing()) 
            }; 
            checkShowing();
        }); 
        assert.strictEqual(result, expected);
    };

    // Switch to Studio Window
    switchToStudio = async () => {
        await rm.switchWebContentByURL('https://cdn.openfin.co/workspace/6.2.4/studio/index.html');
    };

    // Switch to Home
    switchToHome = async () => {
        await rm.switchWebContentByTitle('OpenFin Home');
    };
}

export default new HelperFunctions();