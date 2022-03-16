import Common from "../page";

declare var browser:any;

class storeAPI extends Common {
    
    get registerStoreBtn () {return browser.$('//h2[contains(text(), "Store API")]/following-sibling::button[contains(text(), "Register")]')};
    
    get deregisterStoreBtn () {return browser.$('//h2[contains(text(), "Store API")]/following-sibling::button[contains(text(), "Deregister")]')};
    get deregisterStoreSelector () {return browser.$('//h2[contains(text(), "Deregister Store Provider")]/following-sibling::select')}
    get deregisterStoreSubmitBtn () {return browser.$('//button[contains(text(), "Deregister")]')};

    get showStoreBtn () {return browser.$('//h2[contains(text(), "Store API")]/following-sibling::button[contains(text(), "Show")]')};
    get hideStoreBtn () {return browser.$('//h2[contains(text(), "Store API")]/following-sibling::button[contains(text(), "Hide")]')};

    registerStore = async () => {
        await this.registerStoreBtn.click();
    };

    deregisterStore = async () => {
        await this.deregisterStoreBtn.click();
        await this.deregisterStoreSelector.selectByIndex(1);
        await this.deregisterStoreSubmitBtn.click();
        // Insert assertion here
    };
3
    showStore = async () => {
        await this.showStoreBtn.click();
    };

    hideStore = async () => {
        await this.hideStoreBtn.click();
    };
}