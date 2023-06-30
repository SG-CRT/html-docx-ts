export declare const defaultConfig: {
    leftStr: string;
    centerStr: string;
    rightStr: string;
};
export declare type Config = typeof defaultConfig;
export declare const headerTemplate: (config: Partial<Config>) => string;
