"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../page"));
const rm = __importStar(require("wdio-openfin-service"));
const assert_1 = __importDefault(require("assert"));
class generalPage extends page_1.default {
    constructor() {
        super(...arguments);
        this.startandSwitchToNewPlatform = async () => {
            await this.startNewPlatformBtn.click();
            // Figure out how to get to the other platform
        };
        // Assertion for whether or the component is showing
        this.isShowing = async (expected) => {
            const result = await browser.executeAsync(function (done) {
                const checkShowing = async () => {
                    done(await fin.me.isShowing());
                };
                checkShowing();
            });
            assert_1.default.strictEqual(result, expected);
        };
        // Switch to Studio Window
        this.switchToStudio = async () => {
            await rm.switchWebContentByURL('https://cdn.openfin.co/workspace/6.2.4/studio/index.html');
            await this.isShowing(true);
        };
        // Switch to Home
        this.switchToHome = async () => {
            await rm.switchWebContentByTitle('OpenFin Home');
            await this.isShowing(true);
        };
    }
    get startNewPlatformBtn() { return browser.$('//h2[contains(text(), "General")]/following-sibling::button[contains(text(), "Start New Platform")]'); }
    ;
}
exports.default = new generalPage();
