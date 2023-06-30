declare const defaultConfig: {
    leftStr: string;
    centerStr: string;
    rightStr: string;
};
declare type Config = typeof defaultConfig;
export declare const footerTemplate: (config: Partial<Config>) => string;
export {};
