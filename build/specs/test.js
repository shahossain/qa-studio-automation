"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const platformAPI_page_1 = __importDefault(require("../pages/studio/platformAPI.page"));
const homeAPI_page_1 = __importDefault(require("../pages/studio/homeAPI.page"));
const general_page_1 = __importDefault(require("../pages/studio/general.page"));
describe("Initialize Platform and Register Home w and w/o Filters", function () {
    it('Initialize Platform', async () => {
        await platformAPI_page_1.default.intializePlatform(false, false);
    });
    it('Register Home', async () => {
        await homeAPI_page_1.default.registerHome("Custom Home");
        await general_page_1.default.switchToHome();
    });
    it('Register Home with Filters', async () => {
        await general_page_1.default.switchToStudio();
        await homeAPI_page_1.default.registerHomeWithFilters("Custom Home");
    });
});
