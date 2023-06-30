/// <reference types="node" />
import { DocumentOptions, DocumentConfig } from './internal';
export declare function asBlob(htmlSource: string, options?: Partial<DocumentOptions>, headerConfig?: Partial<DocumentConfig>, footerConfig?: Partial<DocumentConfig>): Promise<Blob | Buffer>;
