"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserAPI_page_1 = __importDefault(require("../pages/studio/browserAPI.page"));
const platformAPI_page_1 = __importDefault(require("../pages/studio/platformAPI.page"));
describe("JSON Test", function () {
    it('Test', async () => {
        await platformAPI_page_1.default.intializePlatform(false, true);
        await browserAPI_page_1.default.adjustLaunchPageJSON();
    });
});
