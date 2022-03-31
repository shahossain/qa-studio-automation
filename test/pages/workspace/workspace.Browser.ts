import Page from '../page'
import assert from 'assert'


declare var fin:any;
declare var browser:any;


class WorkspaceBrowser  extends Page {

    // Browser Elements
    get pageTitleElement () { return browser.$$("//button/span")};
    get viewTitleElement () { return browser.$$("//li/span")};
    
    // Window State Buttons
    get closeWindowBtn () { return browser.$('//button[@title="Close Window"]')};


    verifyPageExists = async (pageTitle:String) => {
        
        for (let i = 0; i < this.pageTitleElement.length; i++) {
            let titleText = this.pageTitleElement[i].getText();
            assert.strictEqual(titleText, pageTitle);
        };
    };

    closeWindow = async () => {
        await this.closeWindowBtn.click();
    };

    verifyViewExists = async (viewTitle:string) => {
        for (let i = 0; i < this.viewTitleElement.length; i++) {
            expect(this.viewTitleElement[i]).toHaveTextContaining(viewTitle)
        }
    };
};

export default new WorkspaceBrowser();