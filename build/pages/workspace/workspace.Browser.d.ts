import Page from '../page';
declare class WorkspaceBrowser extends Page {
    get pageTitleElement(): any;
    get viewTitleElement(): any;
    get closeWindowBtn(): any;
    verifyPageExists: (pageTitle: String) => Promise<void>;
    closeWindow: () => Promise<void>;
    verifyViewExists: (viewTitle: string) => Promise<void>;
}
declare const _default: WorkspaceBrowser;
export default _default;
