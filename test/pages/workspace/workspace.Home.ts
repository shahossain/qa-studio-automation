import Page from '../page'
import assert from 'assert'

declare var fin:any;
declare var browser:any;

class WorkspaceHome  extends Page {

    // All Registered Providers
    get allProviders () {return browser.$$('//button[contains(@aria-label, "Provider")]')};

    // Assertion for number of Providers
    checkProviderCount = async (numberOfProviders:number) => {
        async function getArrayLength() {
            const arraylength = this.allProviders.length;
            assert.strictEqual(arraylength, numberOfProviders);
        } getArrayLength();
    };
};

export default new WorkspaceHome();
