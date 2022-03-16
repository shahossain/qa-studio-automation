import Page from "../page";

declare var fin:any;
declare var browser:any;

class generalPage extends Page {
    
    get startNewPlatformBtn () {return browser.$('//h2[contains(text(), "General")]/following-sibling::button[contains(text(), "Start New Platform")]')};

    startandSwitchToNewPlatform = async () => {
        await this.startNewPlatformBtn.click();
        // Figure out how to get to the other platform
    };
}

export default new generalPage();