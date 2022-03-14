import * as rm from 'wdio-openfin-service'
import BrowserAPI from '../pages/studio/browserAPI.page'
import PlatformAPI from '../pages/studio/platformAPI.page'

declare var browser:any;

describe("JSON Test", function() {


    it('Test', async () => {
        await PlatformAPI.intializePlatform(false, true);
        await BrowserAPI.adjustLaunchPageJSON();
    });
    
})