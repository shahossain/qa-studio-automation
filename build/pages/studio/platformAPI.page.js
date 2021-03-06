"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
class platformAPI extends page_1.default {
    constructor() {
        super(...arguments);
        this.intializePlatform = async (hidePageCloseOption, disablePageCloseOption) => {
            await this.intializeBtn.click();
            if (hidePageCloseOption == true) {
                await this.hideCloseButtonCheckbox.click();
            }
            if (disablePageCloseOption == true) {
                await this.disableCloseButtonCheckbox.click();
            }
            await this.initializePlatformSubmitBtn.click();
        };
    }
    // Intialize Platform Elements
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
    // Initialize Platform with Theme Elements
    get intializeWithThemeBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Theme"]'); }
    ;
    // Initialize Platform with Presets Elements
    get intializeWithPresetsBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Presets"]'); }
    ;
}
;
exports.default = new platformAPI();
