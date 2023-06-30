"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asBlob = void 0;
var tslib_1 = require("tslib");
var internal_1 = require("./internal");
var JSZip = require("jszip");
function asBlob(htmlSource, options, headerConfig, footerConfig) {
    if (options === void 0) { options = {}; }
    if (headerConfig === void 0) { headerConfig = {}; }
    if (footerConfig === void 0) { footerConfig = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var zip;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    zip = new JSZip();
                    internal_1.addFiles(zip, htmlSource, options, headerConfig, footerConfig);
                    return [4 /*yield*/, internal_1.generateDocument(zip)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.asBlob = asBlob;
//# sourceMappingURL=index.js.map