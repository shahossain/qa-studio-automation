import * as rm from 'wdio-openfin-service'
import BrowserAPI from '../pages/studio/browserAPI.page'
import PlatformAPI from '../pages/studio/platformAPI.page'
import HomeAPI from '../pages/studio/homeAPI.page'
import General from '../pages/studio/general.page'

declare var browser:any;

describe("Initialize Platform and Register Home w and w/o Filters", function() {

    it('Initialize Platform', async () => {
        await PlatformAPI.intializePlatform(false, false);
    });

    it('Register Home',async () => {
        await HomeAPI.registerHome("Custom Home");
        await General.switchToHome();
    });

    it('Register Home with Filters', async () => {
        await General.switchToStudio();
        await HomeAPI.registerHomeWithFilters("Custom Home");
    });
    
});