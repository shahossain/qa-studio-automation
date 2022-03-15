import Page from "../page";
declare class generalPage extends Page {
    get startNewPlatformBtn(): any;
    startandSwitchToNewPlatform: () => Promise<void>;
    isShowing: (expected: boolean) => Promise<void>;
    switchToStudio: () => Promise<void>;
    switchToHome: () => Promise<void>;
}
declare const _default: generalPage;
export default _default;
