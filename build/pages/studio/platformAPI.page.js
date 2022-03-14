"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
class platformAPI extends page_1.default {
    constructor() {
        super(...arguments);
        this.intializePlatform = async (hideCloseOption, disableCloseOption) => {
            await this.intializeBtn.click();
            if (hideCloseOption == true) {
                await this.hideCloseButtonCheckbox.click();
            }
            if (disableCloseOption == true) {
                await this.disableCloseButtonCheckbox.click();
            }
            await browser.pause(5000);
            await this.initializePlatformSubmitBtn.click();
        };
    }
    get intializeBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize"]'); }
    ;
    get initializePlatformSubmitBtn() { return browser.$('//button[contains(text(), "Initialize Platform")]'); }
    ;
    get initializePlatformIconUrlInput() { return browser.$('//input[@placeholder = "icon Url"]'); }
    ;
    get initializePlatformUnsavedIconUrlInput() { return browser.$('//input[@placeholder = "unsaved icon Url"]'); }
    ;
    get hideCloseButtonCheckbox() { return browser.$('//div[text() = "Hide Close Button"]//input[@type = "checkbox"]'); }
    ;
    get disableCloseButtonCheckbox() { return browser.$('//div[text() = "Disable Close Button"]//input[@type = "checkbox"]'); }
    ;
    get intializeWithThemeBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Theme"]'); }
    ;
    get intializeWithPresetsBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Presets"]'); }
    ;
}
;
exports.default = new platformAPI();
