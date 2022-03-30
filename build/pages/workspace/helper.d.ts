import Page from '../page';
declare class HelperFunctions extends Page {
    isShowing: (expected: boolean) => Promise<void>;
    switchToStudio: () => Promise<void>;
    switchToHome: () => Promise<void>;
    switchToBrowser: () => Promise<void>;
}
declare const _default: HelperFunctions;
export default _default;
