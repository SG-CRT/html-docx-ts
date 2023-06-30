"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerTemplate = void 0;
exports.headerTemplate = function (config) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n    <w:hdr xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:p>\n            <w:pPr>\n                <w:pStyle w:val=\"\" />\n            </w:pPr>\n            <w:r>\n                <w:t>" + (config.leftStr || '') + "</w:t>\n            </w:r>\n            <w:r>\n                <w:ptab w:relativeTo=\"margin\" w:alignment=\"center\" w:leader=\"none\" />\n            </w:r>\n            <w:r>\n                <w:t>" + (config.centerStr || '') + "</w:t>\n            </w:r>\n            <w:r>\n                <w:ptab w:relativeTo=\"margin\" w:alignment=\"right\" w:leader=\"none\" />\n            </w:r>\n            <w:r>\n                <w:t>" + (config.rightStr || '') + "</w:t>\n            </w:r>\n        </w:p>\n    </w:hdr>";
};
//# sourceMappingURL=headerTemplate.js.map