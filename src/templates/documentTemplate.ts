export const defaultMargins = {
  top: 1440,
  right: 1440,
  bottom: 1440,
  left: 1440,
  header: 720,
  footer: 720,
  gutter: 0,
}

export type Margins = typeof defaultMargins

export type Orient = 'landscape' | 'portrait'

export const documentTemplate = (width: number, height: number, orient: string, margins: Margins) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <w:document
    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
    xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
   >
    <w:body>
      <w:altChunk r:id="htmlChunk" />
      <w:sectPr>
        <w:headerReference w:type="default" r:id="rId6" />
        <w:footerReference w:type="default" r:id="rId7" />
        <w:pgSz w:w="${width}" w:h="${height}" w:orient="${orient}" />
        <w:pgMar w:top="${margins.top}"
          w:right="${margins.right}"
          w:bottom="${margins.bottom}"
          w:left="${margins.left}"
          w:header="${margins.header}"
          w:footer="${margins.footer}"
          w:gutter="${margins.gutter}" />
      </w:sectPr>
    </w:body>
  </w:document>
`
}
