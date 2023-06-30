export declare const defaultMargins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
    header: number;
    footer: number;
    gutter: number;
};
export declare type Margins = typeof defaultMargins;
export declare type Orient = 'landscape' | 'portrait';
export declare const documentTemplate: (width: number, height: number, orient: string, margins: Margins) => string;
