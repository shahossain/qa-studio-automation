"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studio_PlatformAPI_1 = __importDefault(require("../pages/studio/studio.PlatformAPI"));
const studio_HomeAPI_1 = __importDefault(require("../pages/studio/studio.HomeAPI"));
const studio_BrowserAPI_1 = __importDefault(require("../pages/studio/studio.BrowserAPI"));
const helper_1 = __importDefault(require("../pages/workspace/helper"));
const workspace_Home_1 = __importDefault(require("../pages/workspace/workspace.Home"));
describe("End to End Smoke Test - OpenFin Workspace", function () {
    describe("Initialize Platform", function () {
        it('Initialize Platform', async () => {
            await studio_PlatformAPI_1.default.intializePlatform(false, false);
        });
    });
    describe("Browser Smoke Test", async () => {
        describe("Launch Page", async () => {
            it('Adjust Launch Page JSON', async () => {
                await studio_BrowserAPI_1.default.adjustLaunchPageJSON();
                await studio_BrowserAPI_1.default.launchPage();
            });
        });
    });
    describe.skip("Home Smoke Test", async () => {
        describe("Register 2 Home Providers", async () => {
            it('Register Home without Filters', async () => {
                await helper_1.default.switchToStudio();
                await studio_HomeAPI_1.default.registerHome("Custom Home");
                await helper_1.default.switchToHome();
            });
            it('Register Home with Filters', async () => {
                await helper_1.default.switchToStudio();
                await studio_HomeAPI_1.default.registerHomeWithFilters("Custom Home");
            });
            it('Verify Provider count', async () => {
                await helper_1.default.switchToHome();
                await workspace_Home_1.default.checkProviderCount(2);
            });
        });
        describe("Launch Content through Search Filter", function () {
            it('Go into Home Search', async () => {
                await workspace_Home_1.default.searchFirstProviderWithFilters();
            });
            it('Apply Filter and Launch Content', async () => {
                await workspace_Home_1.default.applyFilterAndLaunchContent();
            });
            it('Verify Content has launched', async () => {
                await helper_1.default.switchToBrowser();
            });
        });
    });
});
