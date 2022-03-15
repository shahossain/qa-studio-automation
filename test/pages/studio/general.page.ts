import Page from "../page";
import * as rm from 'wdio-openfin-service'
import assert from 'assert'

declare var fin:any;
declare var browser:any;

class generalPage extends Page {
    
    get startNewPlatformBtn () {return browser.$('//h2[contains(text(), "General")]/following-sibling::button[contains(text(), "Start New Platform")]')};

    startandSwitchToNewPlatform = async () => {
        await this.startNewPlatformBtn.click();
        // Figure out how to get to the other platform
    };

    
    // Assertion for whether or the component is showing
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
        await this.isShowing(true);
    }

    // Switch to Home
    switchToHome = async () => {
        await rm.switchWebContentByTitle('OpenFin Home');
        await this.isShowing(true);
    }

}

export default new generalPage();