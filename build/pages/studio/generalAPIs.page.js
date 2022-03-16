"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
class generalPage extends page_1.default {
    constructor() {
        super(...arguments);
        this.startandSwitchToNewPlatform = async () => {
            await this.startNewPlatformBtn.click();
            // Figure out how to get to the other platform
        };
    }
    get startNewPlatformBtn() { return browser.$('//h2[contains(text(), "General")]/following-sibling::button[contains(text(), "Start New Platform")]'); }
    ;
}
exports.default = new generalPage();
