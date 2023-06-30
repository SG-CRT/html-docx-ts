import { addFiles, generateDocument, DocumentOptions, DocumentConfig } from './internal'
import JSZip = require('jszip')

export async function asBlob(
  htmlSource: string,
  options: Partial<DocumentOptions> = {},
  headerConfig: Partial<DocumentConfig> = {},
  footerConfig: Partial<DocumentConfig> = {},
) {
  const zip = new JSZip()
  addFiles(zip, htmlSource, options, headerConfig, footerConfig)
  return await generateDocument(zip)
}
