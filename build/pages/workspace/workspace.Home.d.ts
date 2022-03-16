import Page from '../page';
declare class WorkspaceHome extends Page {
    get allProviders(): any;
    checkProviderCount: (numberOfProviders: number) => Promise<void>;
}
declare const _default: WorkspaceHome;
export default _default;
