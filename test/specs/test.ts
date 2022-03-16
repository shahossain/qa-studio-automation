import PlatformAPI from '../pages/studio/studio.PlatformAPI'
import HomeAPI from '../pages/studio/studio.HomeAPI'
import Helper from '../pages/workspace/helper'
import WSHome from '../pages/workspace/workspace.Home'

declare var browser:any;

describe("Initialize Platform and Register Home", function() {

    it('Initialize Platform', async () => {
        await PlatformAPI.intializePlatform(false, false);
    });

    it('Register Home', async () => {
        await HomeAPI.registerHome("Custom Home");
        await Helper.switchToHome();
    });

    it('Register Home with Filters', async () => {
        await Helper.switchToStudio();
        await HomeAPI.registerHomeWithFilters("Custom Home");
    });

    it('Verify Provider count', async () => {
        await Helper.switchToHome();
        await WSHome.checkProviderCount(2);
    });
    
});