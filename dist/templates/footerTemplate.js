"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerTemplate = void 0;
function pageNum(val) {
    if (val === 'pageNum') {
        return "<w:r><w:fldChar w:fldCharType=\"begin\" /></w:r>\n<w:r>\n  <w:instrText>PAGE * MERGEFORMAT</w:instrText>\n</w:r>\n<w:r><w:fldChar w:fldCharType=\"end\" /></w:r>";
    }
    else if (val) {
        return " <w:t>" + (val || '') + "</w:t>";
    }
    else {
        return "<w:t>" + '' + "</w:t>";
    }
}
exports.footerTemplate = function (config) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n  <w:ftr xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n      <w:p>\n          <w:pPr>\n              <w:pStyle w:val=\"\" />\n          </w:pPr>\n          <w:r>\n              " + pageNum(config.leftStr) + "\n          </w:r>\n          <w:r>\n              <w:ptab w:relativeTo=\"margin\" w:alignment=\"center\" w:leader=\"none\" />\n          </w:r>\n          <w:r>\n              " + pageNum(config.centerStr) + "\n          </w:r>\n          <w:r>\n              <w:ptab w:relativeTo=\"margin\" w:alignment=\"right\" w:leader=\"none\" />\n          </w:r>\n          <w:r>\n              " + pageNum(config.rightStr) + "\n          </w:r>\n      </w:p>\n  </w:ftr>";
};
//# sourceMappingURL=footerTemplate.js.map