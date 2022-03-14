import Page from "../page";
declare class browserAPI extends Page {
    get launchPageBtn(): any;
    get launchPageJSON(): any;
    get launchPageSubmitBtn(): any;
    get quitWorkspaceBtn(): any;
    get createWindowBtn(): any;
    get createWindowNewBtn(): any;
    get setActivePageBtn(): any;
    get addPageBtn(): any;
    get removePageBtn(): any;
    get getAndSaveSnapshotBtn(): any;
    get applySnapshotBtn(): any;
    get createViewBtn(): any;
    get replaceToolbarOptionsBtn(): any;
    get replaceWindowStateButtonOptionsBtn(): any;
    adjustLaunchPageJSON: () => Promise<void>;
}
declare const _default: browserAPI;
export default _default;
