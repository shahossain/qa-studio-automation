import PlatformAPI from '../pages/studio/studio.PlatformAPI'
import HomeAPI from '../pages/studio/studio.HomeAPI'
import BrowserAPI from '../pages/studio/studio.BrowserAPI'

import Helper from '../pages/workspace/helper'

import WSHome from '../pages/workspace/workspace.Home'
import WSBrowser from '../pages/workspace/workspace.Browser'

describe("End to End Smoke Test - OpenFin Workspace", function() {

    describe("Initialize Platform", function() {

        it('Initialize Platform', async () => {
            await PlatformAPI.intializePlatform(false, false);
        });
    });

    describe("Browser Smoke Test", async () => {
        
        describe("Launch Page", async () => {
            
            it('Adjust Launch Page JSON', async () => {
                await BrowserAPI.adjustLaunchPageJSON();
                await BrowserAPI.launchPage();
            });
        });

    });

    describe.skip("Home Smoke Test", async () => {
        
        describe("Register 2 Home Providers",async () => {
    
            it('Register Home without Filters', async () => {
                await Helper.switchToStudio();
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
    
        describe("Launch Content through Search Filter", function() {
        
            it('Go into Home Search',async () => {
                await WSHome.searchFirstProviderWithFilters();
            });
    
            it('Apply Filter and Launch Content', async () => {
                await WSHome.applyFilterAndLaunchContent();
            });
    
            it('Verify Content has launched', async () => {
                await Helper.switchToBrowser();
            });
        });
    });
   
});