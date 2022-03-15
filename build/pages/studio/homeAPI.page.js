"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
const assert_1 = __importDefault(require("assert"));
class homeAPI extends page_1.default {
    constructor() {
        super(...arguments);
        // Assertion for whether or the component is showing
        this.isShowing = async (expected) => {
            const result = await browser.executeAsync(function (done) {
                const checkShowing = async () => {
                    done(await fin.me.isShowing());
                };
                checkShowing();
            });
            assert_1.default.strictEqual(result, expected);
        };
        this.registerHome = async (homeName) => {
            await this.registerHomeBtn.click();
            await this.registerHomeNameInput.clearValue();
            await this.registerHomeNameInput.setValue(homeName);
            await this.registerHomeIconInput.clearValue();
            await this.registerHomeIconInput.setValue("https://www.bing.com/favicon.ico");
            await this.registerHomeLogoInput.clearValue();
            await this.registerHomeLogoInput.setValue("https://www.google.com/favicon.ico");
            await this.registerHomeSubmitBtn.click();
        };
        this.deregisterHome = async (homeName) => {
            await this.deregisterHomeBtn.click();
            await this.deregisterHomeNameInput.setValue(homeName);
            await this.deregisterHomeSubmitBtn.click();
        };
        this.registerHomeWithFilters = async (homeName) => {
            await this.registerHomeWithFiltersBtn.click();
            await this.registerHomeNameInput.clearValue();
            await this.registerHomeNameInput.setValue("" + homeName + " with Filters");
            await this.registerHomeIconInput.clearValue();
            await this.registerHomeIconInput.setValue("https://www.bing.com/favicon.ico");
            await this.registerHomeLogoInput.clearValue();
            await this.registerHomeLogoInput.setValue("https://www.google.com/favicon.ico");
            await this.registerHomeSubmitBtn.click();
        };
        this.showHome = async () => {
            await this.showHomeBtn.click();
            await this.isShowing(true);
        };
        this.hideHome = async () => {
            await this.hideHomeBTn.click();
            await this.isShowing(false);
        };
    }
    // Register Home Elements w & w/o filters
    get registerHomeBtn() { return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Register")]'); }
    ;
    get registerHomeWithFiltersBtn() { return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Register With Filters")]'); }
    ;
    get registerHomeNameInput() { return browser.$('//input[@placeholder = "Title"]'); }
    ;
    get registerHomeIconInput() { return browser.$('//input[@placeholder = "Icon URL"]'); }
    ;
    get registerHomeLogoInput() { return browser.$('//input[@placeholder = "Logo URL"]'); }
    ;
    get registerHomeSubmitBtn() { return browser.$('//h2[text() = "Register Home Provider"]//parent::div/button[text() = "Register"]'); }
    ;
    // Deregister Home Elements
    get deregisterHomeBtn() { return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Deregister")]'); }
    ;
    get deregisterHomeNameInput() { return browser.$('//input[@placeholder = "Name"]'); }
    ;
    get deregisterHomeSubmitBtn() { return browser.$('//button[contains(text(), "Deregister")]'); }
    ;
    // Show/Hide Elements
    get showHomeBtn() { return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Show")]'); }
    ;
    get hideHomeBTn() { return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Hide")]'); }
    ;
}
exports.default = new homeAPI();
