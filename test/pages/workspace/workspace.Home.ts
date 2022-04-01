import Page from '../page'
import assert from 'assert'
import Helper from "../workspace/helper"


declare var fin:any;
declare var browser:any;


class WorkspaceHome  extends Page {

    // Home Elements
    get allProviders () {return browser.$$('//button[contains(@aria-label, "Provider")]')};
    get firstProviderWithFilters () {return browser.$('//button[contains(@aria-label, "Filters")]')};
    
    // Search Elements
    get searchInputField () {return browser.$('//input[@id = "search-input"]')};
    get startsWithFilter () {return browser.$('//button[contains(text(), "Starts With")]')};
    get filterOptions () {return browser.$$('//input[@type="checkbox"]')};
    get filterSubmitBtn () {return browser.$('//button[contains(text(), "OK")]')};
    get searchResults () {return browser.$$('//div[@id="result-list"]/div')};


    // Assertion for number of Providers
    checkProviderCount = async (numberOfProviders:number) => {
        Helper.isShowing(true);
        async function getArrayLength() {
            const arraylength = this.allProviders.length;
            assert.strictEqual(arraylength, numberOfProviders);
        } getArrayLength();
    };

    // Search and click into the first Provider with Filters
    searchFirstProviderWithFilters = async () => {
        await this.firstProviderWithFilters.click();
        await this.searchInputField.click();
        await browser.keys("Enter");
    };

    applyFilterAndLaunchContent = async () => {
        await this.startsWithFilter.click();
        const filterOptionCount =  await this.filterOptions.length;
        
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
            
        };
    };
};

export default new WorkspaceHome();
