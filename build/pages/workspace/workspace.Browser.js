"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
const assert_1 = __importDefault(require("assert"));
class WorkspaceBrowser extends page_1.default {
    constructor() {
        super(...arguments);
        this.verifyPageExists = async (pageTitle) => {
            for (let i = 0; i < this.pageTitleElement.length; i++) {
                let titleText = this.pageTitleElement[i].getText();
                assert_1.default.strictEqual(titleText, pageTitle);
            }
            ;
        };
        this.closeWindow = async () => {
            await this.closeWindowBtn.click();
        };
        this.verifyViewExists = async (viewTitle) => {
            for (let i = 0; i < this.viewTitleElement.length; i++) {
                expect(this.viewTitleElement[i]).toHaveTextContaining(viewTitle);
            }
        };
    }
    // Browser Elements
    get pageTitleElement() { return browser.$$("//button/span"); }
    ;
    get viewTitleElement() { return browser.$$("//li/span"); }
    ;
    // Window State Buttons
    get closeWindowBtn() { return browser.$('//button[@title="Close Window"]'); }
    ;
}
;
exports.default = new WorkspaceBrowser();
