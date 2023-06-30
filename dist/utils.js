"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFooter = exports.getHeader = exports.getMHTdocument = void 0;
var templates_1 = require("./templates");
function getMHTdocument(htmlSource) {
    var ref = _prepareImageParts(htmlSource);
    var imageContentPartsString = ref.imageContentParts.join('\n');
    htmlSource = ref.htmlSource.replace(/\=/g, '=3D');
    return templates_1.mhtDocumentTemplate(htmlSource, imageContentPartsString);
}
exports.getMHTdocument = getMHTdocument;
function getHeader(config) {
    return templates_1.headerTemplate(config);
}
exports.getHeader = getHeader;
function getFooter(config) {
    return templates_1.footerTemplate(config);
}
exports.getFooter = getFooter;
function _prepareImageParts(htmlSource) {
    var imageContentParts = [];
    var inlinedSrcPattern = /"data:(\w+\/\w+);(\w+),(\S+)"/g;
    var inlinedReplacer = function (match, contentType, contentEncoding, encodedContent) {
        var index = imageContentParts.length;
        var extension = contentType.split('/')[1];
        var contentLocation = "file:///C:/fake/image" + index + "." + extension;
        imageContentParts.push(templates_1.mhtPartTemplate(contentType, contentEncoding, contentLocation, encodedContent));
        return "\"" + contentLocation + "\"";
    };
    if (!/<img/g.test(htmlSource)) {
        return { htmlSource: htmlSource, imageContentParts: imageContentParts };
    }
    htmlSource = htmlSource.replace(inlinedSrcPattern, inlinedReplacer);
    return { htmlSource: htmlSource, imageContentParts: imageContentParts };
}
//# sourceMappingURL=utils.js.map