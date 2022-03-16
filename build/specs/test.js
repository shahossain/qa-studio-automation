"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studio_PlatformAPI_1 = __importDefault(require("../pages/studio/studio.PlatformAPI"));
const studio_HomeAPI_1 = __importDefault(require("../pages/studio/studio.HomeAPI"));
const helper_1 = __importDefault(require("../pages/workspace/helper"));
const workspace_Home_1 = __importDefault(require("../pages/workspace/workspace.Home"));
describe("Initialize Platform and Register Home", function () {
    it('Initialize Platform', async () => {
        await studio_PlatformAPI_1.default.intializePlatform(false, false);
    });
    it('Register Home', async () => {
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
