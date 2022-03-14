"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
class browserAPI extends page_1.default {
    constructor() {
        super(...arguments);
        this.convertToObj = async (elem) => {
            const elemText = elem.textContent;
            const obj = JSON.parse(elemText);
            return obj;
        };
        this.adjustLaunchPageJSON = async () => {
            await this.launchPageBtn.click();
            let launchPageJSONText = await this.launchPageJSON.getValue();
            const obj = JSON.parse(launchPageJSONText);
            obj.title = "Custom Page Title";
            let changedLaunchPageJSONText = JSON.stringify(obj);
            await this.launchPageJSON.clearValue();
            await this.launchPageJSON.setValue(changedLaunchPageJSONText);
            await this.launchPageSubmitBtn.click();
        };
    }
    get launchPageBtn() { return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Launch Page")]'); }
    ;
    get launchPageJSON() { return browser.$('//h2[contains(text(), "Launch Page")]/following-sibling::textarea'); }
    ;
    get launchPageSubmitBtn() { return browser.$('//button[text() = "Launch"]'); }
    ;
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
