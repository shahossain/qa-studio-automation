import Page from "../page";
declare class platformAPI extends Page {
    get intializeBtn(): any;
    get initializePlatformSubmitBtn(): any;
    get initializePlatformIconUrlInput(): any;
    get initializePlatformUnsavedIconUrlInput(): any;
    get hideCloseButtonCheckbox(): any;
    get disableCloseButtonCheckbox(): any;
    get intializeWithThemeBtn(): any;
    get intializeWithPresetsBtn(): any;
    intializePlatform: (hidePageCloseOption: boolean, disablePageCloseOption: boolean) => Promise<void>;
}
declare const _default: platformAPI;
export default _default;
