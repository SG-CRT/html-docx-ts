"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentTemplate = exports.defaultMargins = void 0;
exports.defaultMargins = {
    top: 1440,
    right: 1440,
    bottom: 1440,
    left: 1440,
    header: 720,
    footer: 720,
    gutter: 0,
};
exports.documentTemplate = function (width, height, orient, margins) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n  <w:document\n    xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"\n    xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\"\n   >\n    <w:body>\n      <w:altChunk r:id=\"htmlChunk\" />\n      <w:sectPr>\n        <w:headerReference w:type=\"default\" r:id=\"rId6\" />\n        <w:footerReference w:type=\"default\" r:id=\"rId7\" />\n        <w:pgSz w:w=\"" + width + "\" w:h=\"" + height + "\" w:orient=\"" + orient + "\" />\n        <w:pgMar w:top=\"" + margins.top + "\"\n          w:right=\"" + margins.right + "\"\n          w:bottom=\"" + margins.bottom + "\"\n          w:left=\"" + margins.left + "\"\n          w:header=\"" + margins.header + "\"\n          w:footer=\"" + margins.footer + "\"\n          w:gutter=\"" + margins.gutter + "\" />\n      </w:sectPr>\n    </w:body>\n  </w:document>\n";
};
//# sourceMappingURL=documentTemplate.js.map