declare const defaultConfig: {
  leftStr: string
  centerStr: string
  rightStr: string
}
declare type Config = typeof defaultConfig
export const footerTemplate = (config: Partial<Config>) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
      <w:p>
          <w:pPr>
              <w:pStyle w:val="" />
          </w:pPr>
          <w:r>
              <w:t>${config.leftStr || ''}</w:t>
          </w:r>
          <w:r>
              <w:ptab w:relativeTo="margin" w:alignment="center" w:leader="none" />
          </w:r>
          <w:r>
              <w:t>${config.centerStr || ''}</w:t>
          </w:r>
          <w:r>
              <w:ptab w:relativeTo="margin" w:alignment="right" w:leader="none" />
          </w:r>
          <w:r>
              <w:t>${config.rightStr || ''}</w:t>
          </w:r>
      </w:p>
  </w:ftr>`
}
