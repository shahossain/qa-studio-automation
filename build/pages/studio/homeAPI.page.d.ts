import Page from "../page";
declare class homeAPI extends Page {
    get registerHomeBtn(): any;
    get registerHomeWithFiltersBtn(): any;
    get registerHomeNameInput(): any;
    get registerHomeIconInput(): any;
    get registerHomeLogoInput(): any;
    get registerHomeSubmitBtn(): any;
    get deregisterHomeBtn(): any;
    get deregisterHomeNameInput(): any;
    get deregisterHomeSubmitBtn(): any;
    get showHomeBtn(): any;
    get hideHomeBTn(): any;
    isShowing: (expected: boolean) => Promise<void>;
    registerHome: (homeName: string) => Promise<void>;
    deregisterHome: (homeName: string) => Promise<void>;
    registerHomeWithFilters: (homeName: string) => Promise<void>;
    showHome: () => Promise<void>;
    hideHome: () => Promise<void>;
}
declare const _default: homeAPI;
export default _default;
