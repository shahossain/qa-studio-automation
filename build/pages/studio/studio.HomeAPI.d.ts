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
    registerHome: (homeName: String) => Promise<void>;
    deregisterHome: (homeName: String) => Promise<void>;
    registerHomeWithFilters: (homeName: String) => Promise<void>;
    clickShowHome: () => Promise<void>;
    clickHideHome: () => Promise<void>;
}
declare const _default: homeAPI;
export default _default;
