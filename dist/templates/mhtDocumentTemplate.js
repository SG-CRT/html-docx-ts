"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mhtDocumentTemplate = void 0;
exports.mhtDocumentTemplate = function (htmlSource, contentParts) {
    return "MIME-Version: 1.0\nContent-Type: multipart/related;\n    type=\"text/html\";\n    boundary=\"----=mhtDocumentPart\"\n\n\n------=mhtDocumentPart\nContent-Type: text/html;\n    charset=\"utf-8\"\nContent-Transfer-Encoding: quoted-printable\nContent-Location: file:///C:/fake/document.html\n\n" + htmlSource + "\n\n" + contentParts + "\n\n------=mhtDocumentPart--\n";
};
//# sourceMappingURL=mhtDocumentTemplate.js.map