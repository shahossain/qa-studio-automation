import PlatformAPI from '../pages/studio/studio.PlatformAPI'
import HomeAPI from '../pages/studio/studio.HomeAPI'
import BrowserAPI from '../pages/studio/studio.BrowserAPI'

import Helper from '../pages/workspace/helper'

import WSHome from '../pages/workspace/workspace.Home'
import WSBrowser from '../pages/workspace/workspace.Browser'

declare var browser:any;

describe("End to End Smoke Test - OpenFin Workspace", function() {

    describe("Initialize Platform", function() {

        it('Initialize Platform', async () => {
            await PlatformAPI.intializePlatform(false, false);
        });
    });

    describe.skip("Browser Smoke Test", async () => {
        
        describe("Launch Page", async () => {
            
            it('Adjust Launch Page JSON', async () => {
                await BrowserAPI.adjustLaunchPageJSON();
            });

            it('Launch and Verify Page Exists', async () => {
                await BrowserAPI.launchPage();
                await Helper.switchToBrowser();
                await WSBrowser.verifyPageExists("Sample Page");
            });

            it ('Validate Views Exist',async () => {
                await WSBrowser.verifyViewExists("Google");
                await WSBrowser.verifyViewExists("Yahoo");
            });

            it('Close Browser Window',async () => {
                await Helper.switchToBrowser();
                await WSBrowser.closeWindow();
            });
        });

    });

    describe("Home Smoke Test", async () => {
        
        describe("Register 2 Home Providers",async () => {
    
            it('Register Home without Filters', async () => {
                await Helper.switchToStudio();
                await HomeAPI.registerHome("Custom Home");
            });
    
            it('Register Home with Filters', async () => {
                await HomeAPI.registerHomeWithFilters("Custom Home");
            });
    
            it('Verify Provider count', async () => {
                await Helper.switchToHome();
                await WSHome.checkProviderCount(2);
            });
        });
    
        describe.skip("Launch Content through Search Filter", function() {
        
            it('Go into Home Search', async () => {
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