import Page from '../page'
import * as rm from 'wdio-openfin-service'
import assert from 'assert'
import Data from "../data/common"

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
        await rm.switchWebContentByURL(Data.studioUrl);
    };

    // Switch to Home
    switchToHome = async () => {
        await rm.switchWebContentByTitle('OpenFin Home');
    };

    switchToBrowser = async () => {
        await rm.switchWebContentByURL(Data.browserUrl);
    };
}

export default new HelperFunctions();