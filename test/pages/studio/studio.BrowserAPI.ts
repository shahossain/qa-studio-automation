import Page from "../page";
import Data from '../data/common'

declare var browser:any;

class browserAPI extends Page {
    
    // Launch Page Elements
    get launchPageBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Launch Page")]')};
    get launchPageJSON () {return browser.$('//h2[contains(text(), "Launch Page")]/following-sibling::textarea')};
    get launchPageSubmitBtn () {return browser.$('//button[text() = "Launch"]')};

    // Browser API Elements
    get quitWorkspaceBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Quit")]')};
    get createWindowBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create Window")]')};
    get createWindowNewBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create Window New")]')};
    get setActivePageBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Set Active Page")]')};
    get addPageBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Add Page")]')};
    get removePageBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Remove Page")]')};
    get getAndSaveSnapshotBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Get and Save Snapshot")]')};
    get applySnapshotBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Apply Snapshot")]')};
    get createViewBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Create View")]')};
    get replaceToolbarOptionsBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Replace Toolbar Options")]')};
    get replaceWindowStateButtonOptionsBtn () {return browser.$('//h2[contains(text(), "Workspace Platform API")]/following-sibling::button[contains(text(), "Replace Window State Button Options")]')};


    adjustLaunchPageJSON = async () => {
        await this.launchPageBtn.click();
        await this.launchPageJSON.clearValue();
        await this.launchPageJSON.setValue(Data.modifedLaunchPageJSON);
    };

    launchPage = async () => {
        await this.launchPageSubmitBtn.click();
    }
};

export default new browserAPI();