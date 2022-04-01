import Page from "../page";

declare var fin:any;
declare var browser:any;

class homeAPI extends Page {
    
    // Register Home Elements w & w/o filters
    get registerHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[text() = "Register"]')};
    get registerHomeWithFiltersBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[text() = "Register With Filters"]')};
    get registerHomeNameInput () {return browser.$('//input[@placeholder = "Title"]')};
    get registerHomeIconInput () {return browser.$('//input[@placeholder = "Icon URL"]')};
    get registerHomeLogoInput () {return browser.$('//input[@placeholder = "Logo URL"]')};
    get registerHomeSubmitBtn () {return browser.$('//h2[text() = "Register Home Provider"]//parent::div/button[text() = "Register"]')};


    // Deregister Home Elements
    get deregisterHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Deregister")]')};
    get deregisterHomeNameInput () {return browser.$('//input[@placeholder = "Name"]')};
    get deregisterHomeSubmitBtn () {return browser.$('//button[contains(text(), "Deregister")]')};


    // Show/Hide Elements
    get showHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Show")]')};
    get hideHomeBTn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Hide")]')};
    
    registerHome = async (homeName:String) => {
        await this.registerHomeBtn.click();
        await this.registerHomeNameInput.setValue(homeName);
        await this.registerHomeIconInput.setValue("https://www.bing.com/favicon.ico");
        await this.registerHomeLogoInput.addValue("https://www.google.com/favicon.ico");
        await this.registerHomeSubmitBtn.click();
        await browser.keys("Escape");

    };

    deregisterHome = async (homeName:String) => {
        await this.deregisterHomeBtn.click();
        await this.deregisterHomeNameInput.addValue(homeName);
        await this.deregisterHomeSubmitBtn.click();
    };

    registerHomeWithFilters = async (homeName:String) => {
        await this.registerHomeWithFiltersBtn.isClickable();
        await this.registerHomeWithFiltersBtn.click();
        await this.registerHomeNameInput.setValue("" + homeName + " with Filters");
        await this.registerHomeIconInput.setValue("https://www.bing.com/favicon.ico");
        await this.registerHomeLogoInput.addValue("https://www.google.com/favicon.ico");
        await this.registerHomeSubmitBtn.click();
    };

    clickShowHome = async () => {
        await this.showHomeBtn.click();
    };

    clickHideHome = async () => {
        await this.hideHomeBTn.click();
    };
}

export default new homeAPI();