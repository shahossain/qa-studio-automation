import Page from "../page";

declare var fin:any;
declare var browser:any;

class homeAPI extends Page {
    
    // Register Home Elements w & w/o filters
    get registerHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Register")]')};
    get registerHomeWithFiltersBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Register With Filters")]')};
    get registerHomeNameInput () {return browser.$('//input[@placeholder = "Title"]')};
    get registerHomeLogoInput () {return browser.$('//input[@placeholder = "Icon URL"]')};
    get registerHomeSubmitBtn () {return browser.$('//button[contains(text(), "Register")]')};


    // Deregister Home Elements
    get deregisterHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Deregister")]')};
    get deregisterHomeNameInput () {return browser.$('//input[@placeholder = "Name"]')};
    get deregisterHomeSubmitBtn () {return browser.$('//button[contains(text(), "Deregister")]')};


    // Show/Hide Elements
    get showHomeBtn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Show")]')};
    get hideHomeBTn () {return browser.$('//h2[contains(text(), "Home API")]/following-sibling::button[contains(text(), "Hide")]')};


    registerHome = async (homeName:string) => {
        await this.registerHomeBtn.click();
        await this.registerHomeNameInput.clearValue();
        await this.registerHomeNameInput.setValue(homeName);
        await this.registerHomeLogoInput.clearValue();
        await this.registerHomeLogoInput.setValue();
        await this.registerHomeSubmitBtn.click();
    };

    deregisterHome = async (homeName:string) => {
        await this.deregisterHomeBtn.click();
        await this.deregisterHomeNameInput.setValue(homeName);
        await this.deregisterHomeSubmitBtn.click();
    };

    registerHomeWithFilters = async (homeName:string) => {
        await this.registerHomeWithFiltersBtn.click();
        await this.registerHomeNameInput.clearValue();
        await this.registerHomeNameInput.setValue(homeName);
        await this.registerHomeLogoInput.clearValue();
        await this.registerHomeLogoInput.setValue();
        await this.registerHomeSubmitBtn.click();

    };

    showHome = async () => {
        await this.showHomeBtn.click();
        const result = await browser.executeAsync(function (done) {
            const checkShowing = async () => {
                done(await fin.me.isShowing()) 
            };
            checkShowing();
        });
        // add assertion for {result}
    };

    hideHome = async () => {
        await this.hideHomeBTn.click();
        const result = await browser.executeAsync(function (done) {
            const checkShowing = async () => {
                done(await fin.me.isShowing()) 
            };
            checkShowing();
        });
        // add assertion for {result}
    };
}
