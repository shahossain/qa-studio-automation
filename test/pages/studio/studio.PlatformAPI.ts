import Common from "../page";

declare var browser:any;

class platformAPI extends Common {
    
    // Intialize Platform Elements
    get intializeBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize"]')};
    get initializePlatformSubmitBtn () {return browser.$('//button[contains(text(), "Initialize Platform")]')};
    get initializePlatformIconUrlInput () {return browser.$('//input[@placeholder = "icon Url"]')};
    get initializePlatformUnsavedIconUrlInput () {return browser.$('//input[@placeholder = "unsaved icon Url"]')};
    get hideCloseButtonCheckbox () {return browser.$('//div[text() = "Hide Close Button"]//input[@type = "checkbox"]')};
    get disableCloseButtonCheckbox () {return browser.$('//div[text() = "Disable Close Button"]//input[@type = "checkbox"]')};

    // Initialize Platform with Theme Elements
    get intializeWithThemeBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Theme"]')};
    
    // Initialize Platform with Presets Elements
    get intializeWithPresetsBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]//following-sibling::div/button[text() = "Initialize w/ Presets"]')};

    
    intializePlatform = async (hidePageCloseOption:boolean, disablePageCloseOption:boolean) => {
        await this.intializeBtn.click();
        
        if (hidePageCloseOption == true){
            await this.hideCloseButtonCheckbox.click();
        }
        
        if  (disablePageCloseOption == true){
            await this.disableCloseButtonCheckbox.click();
        }
                
        await this.initializePlatformSubmitBtn.click();
    };
};

export default new platformAPI();