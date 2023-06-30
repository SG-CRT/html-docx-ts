"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mhtPartTemplate = void 0;
exports.mhtPartTemplate = function (contentType, contentEncoding, contentLocation, encodedContent) {
    return "------=mhtDocumentPart\nContent-Type: " + contentType + "\nContent-Transfer-Encoding: " + contentEncoding + "\nContent-Location: " + contentLocation + "\n\n" + encodedContent + "\n";
};
//# sourceMappingURL=mhtPartTemplate.js.map