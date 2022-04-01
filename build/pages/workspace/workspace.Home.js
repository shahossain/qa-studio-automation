"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
const assert_1 = __importDefault(require("assert"));
const helper_1 = __importDefault(require("../workspace/helper"));
class WorkspaceHome extends page_1.default {
    constructor() {
        super(...arguments);
        // Assertion for number of Providers
        this.checkProviderCount = async (numberOfProviders) => {
            helper_1.default.isShowing(true);
            async function getArrayLength() {
                const arraylength = this.allProviders.length;
                assert_1.default.strictEqual(arraylength, numberOfProviders);
            }
            getArrayLength();
        };
        // Search and click into the first Provider with Filters
        this.searchFirstProviderWithFilters = async () => {
            await this.firstProviderWithFilters.click();
            await this.searchInputField.click();
            await browser.keys("Enter");
        };
        this.applyFilterAndLaunchContent = async () => {
            await this.startsWithFilter.click();
            const filterOptionCount = await this.filterOptions.length;
            for (let i = 0; i < filterOptionCount; i++) {
                await this.filterOptions[i].click();
                await this.filterSubmitBtn.click();
                let checkExistingResults = await this.searchResults[0].isExisting();
                if (checkExistingResults == true) {
                    await this.searchResults[0].click();
                    break;
                }
                else {
                    await this.startsWithFilter.click();
                }
            }
            ;
        };
    }
    // Home Elements
    get allProviders() { return browser.$$('//button[contains(@aria-label, "Provider")]'); }
    ;
    get firstProviderWithFilters() { return browser.$('//button[contains(@aria-label, "Filters")]'); }
    ;
    // Search Elements
    get searchInputField() { return browser.$('//input[@id = "search-input"]'); }
    ;
    get startsWithFilter() { return browser.$('//button[contains(text(), "Starts With")]'); }
    ;
    get filterOptions() { return browser.$$('//input[@type="checkbox"]'); }
    ;
    get filterSubmitBtn() { return browser.$('//button[contains(text(), "OK")]'); }
    ;
    get searchResults() { return browser.$$('//div[@id="result-list"]/div'); }
    ;
}
;
exports.default = new WorkspaceHome();
