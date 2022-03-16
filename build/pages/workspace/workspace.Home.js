"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
const assert_1 = __importDefault(require("assert"));
class WorkspaceHome extends page_1.default {
    constructor() {
        super(...arguments);
        // Assertion for number of Providers
        this.checkProviderCount = async (numberOfProviders) => {
            async function getArrayLength() {
                const arraylength = this.allProviders.length;
                assert_1.default.strictEqual(arraylength, numberOfProviders);
            }
            getArrayLength();
        };
    }
    // All Registered Providers
    get allProviders() { return browser.$$('//button[contains(@aria-label, "Provider")]'); }
    ;
}
;
exports.default = new WorkspaceHome();
