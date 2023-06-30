/// <reference types="node" />
import JSZip = require('jszip');
import { Orient } from './templates';
export declare type DocumentOptions = typeof defaultDocumentOptions;
declare const defaultDocumentOptions: {
    orientation: Orient;
    margins: Partial<{
        top: number;
        right: number;
        bottom: number;
        left: number;
        header: number;
        footer: number;
        gutter: number;
    }>;
};
export declare type DocumentConfig = typeof defaultDocumentConfig;
declare const defaultDocumentConfig: {
    leftStr: string;
    centerStr: string;
    rightStr: string;
};
export declare function generateDocument(zip: JSZip): Promise<Blob | Buffer>;
export declare function addFiles(zip: JSZip, htmlSource: string, options: Partial<DocumentOptions>, headerConfig: Partial<DocumentConfig>, footerConfig: Partial<DocumentConfig>): JSZip | undefined;
export {};
