"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
class browserAPI extends page_1.default {
    constructor() {
        super(...arguments);
        this.adjustLaunchPageJSON = async () => {
            await this.launchPageBtn.click();
            await this.launchPageJSON.clearValue();
            // await this.launchPageJSON.setValue(Data.modifedLaunchPageJSON);
        };
        this.launchPage = async () => {
            await this.launchPageSubmitBtn.click();
        };
    }
    // Launch Page Elements
    get launchPageBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Launch Page")]'); }
    ;
    get launchPageJSON() { return browser.$('//h2[contains(text(), "Launch Page")]/following-sibling::textarea'); }
    ;
    get launchPageSubmitBtn() { return browser.$('//button[text() = "Launch"]'); }
    ;
    // Browser API Elements
    get quitWorkspaceBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Quit")]'); }
    ;
    get createWindowBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create Window")]'); }
    ;
    get createWindowNewBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create Window New")]'); }
    ;
    get setActivePageBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Set Active Page")]'); }
    ;
    get addPageBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Add Page")]'); }
    ;
    get removePageBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Remove Page")]'); }
    ;
    get getAndSaveSnapshotBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Get and Save Snapshot")]'); }
    ;
    get applySnapshotBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Apply Snapshot")]'); }
    ;
    get createViewBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create View")]'); }
    ;
    get replaceToolbarOptionsBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Replace Toolbar Options")]'); }
    ;
    get replaceWindowStateButtonOptionsBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Replace Window State Button Options")]'); }
    ;
}
;
exports.default = new browserAPI();
