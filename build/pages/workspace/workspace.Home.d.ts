import Page from '../page';
declare class WorkspaceHome extends Page {
    get allProviders(): any;
    get firstProviderWithFilters(): any;
    get searchInputField(): any;
    get startsWithFilter(): any;
    get filterOptions(): any;
    get filterSubmitBtn(): any;
    get searchResults(): any;
    checkProviderCount: (numberOfProviders: number) => Promise<void>;
    searchFirstProviderWithFilters: () => Promise<void>;
    applyFilterAndLaunchContent: () => Promise<void>;
}
declare const _default: WorkspaceHome;
export default _default;
