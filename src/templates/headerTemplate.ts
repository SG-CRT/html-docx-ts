export declare const defaultConfig: {
  leftStr: string
  centerStr: string
  rightStr: string
}
function pageNum(val: any) {
  if (val === 'pageNum') {
    return `<w:r><w:fldChar w:fldCharType="begin" /></w:r>
<w:r>
  <w:instrText>PAGE \* MERGEFORMAT</w:instrText>
</w:r>
<w:r><w:fldChar w:fldCharType="end" /></w:r>`}
  else if (val) { return ` <w:t>${val || ''}</w:t>` }
  else { return `<w:t>${''}</w:t>` }
}
export declare type Config = typeof defaultConfig
export const headerTemplate = (config: Partial<Config>) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <w:p>
            <w:pPr>
                <w:pStyle w:val="" />
            </w:pPr>
            <w:r>
              ${pageNum(config.leftStr)}
            </w:r>
            <w:r>
                <w:ptab w:relativeTo="margin" w:alignment="center" w:leader="none" />
            </w:r>
            <w:r>
              ${pageNum(config.centerStr)}
            </w:r>
            <w:r>
                <w:ptab w:relativeTo="margin" w:alignment="right" w:leader="none" />
            </w:r>
            <w:r>
                ${pageNum(config.rightStr)}
            </w:r>
        </w:p>
    </w:hdr>`
}
