"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFiles = exports.generateDocument = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var assets_1 = require("./assets");
var templates_1 = require("./templates");
var browser_or_node_1 = require("browser-or-node");
var defaultDocumentOptions = {
    orientation: 'portrait',
    margins: {},
};
var defaultDocumentConfig = {
    leftStr: '',
    centerStr: '',
    rightStr: '',
};
function mergeOptions(options, patch) {
    return tslib_1.__assign(tslib_1.__assign({}, options), patch);
}
function generateDocument(zip) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var buffer;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, zip.generateAsync({ type: 'arraybuffer' })];
                case 1:
                    buffer = _a.sent();
                    if (browser_or_node_1.isBrowser) {
                        return [2 /*return*/, new Blob([buffer], {
                                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            })];
                    }
                    else {
                        return [2 /*return*/, new Buffer(new Uint8Array(buffer))];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateDocument = generateDocument;
function getBinaryData(str) {
    return browser_or_node_1.isBrowser ? new Blob([str]) : new Buffer(str, 'utf-8');
}
function renderDocumentFile(documentOptions) {
    var orientation = documentOptions.orientation, margins = documentOptions.margins;
    var marginsOptions = mergeOptions(templates_1.defaultMargins, margins);
    var width = 0;
    var height = 0;
    if (orientation === 'landscape') {
        height = 11906;
        width = 16838;
    }
    else {
        width = 11906;
        height = 16838;
    }
    return templates_1.documentTemplate(width, height, orientation, marginsOptions);
}
function addFiles(zip, htmlSource, options, headerConfig, footerConfig) {
    var _a, _b, _c, _d, _e, _f, _g;
    var documentOptions = mergeOptions(defaultDocumentOptions, options);
    zip === null || zip === void 0 ? void 0 : zip.file('[Content_Types].xml', getBinaryData(assets_1.contentTypesXml), {
        createFolders: false,
    });
    (_a = zip === null || zip === void 0 ? void 0 : zip.folder('_rels')) === null || _a === void 0 ? void 0 : _a.file('.rels', getBinaryData(assets_1.relsXml), { createFolders: false });
    return (_g = (_f = (_e = (_d = (_c = (_b = zip === null || zip === void 0 ? void 0 : zip.folder('word')) === null || _b === void 0 ? void 0 : _b.file('document.xml', renderDocumentFile(documentOptions), {
        createFolders: false,
    })) === null || _c === void 0 ? void 0 : _c.file('afchunk.mht', utils_1.getMHTdocument(htmlSource), {
        createFolders: false,
    })) === null || _d === void 0 ? void 0 : _d.file('header1.xml', utils_1.getHeader(headerConfig), {
        createFolders: false,
    })) === null || _e === void 0 ? void 0 : _e.file('footer1.xml', utils_1.getFooter(footerConfig), {
        createFolders: false,
    })) === null || _f === void 0 ? void 0 : _f.folder('_rels')) === null || _g === void 0 ? void 0 : _g.file('document.xml.rels', getBinaryData(assets_1.documentXmlRels), {
        createFolders: false,
    });
}
exports.addFiles = addFiles;
//# sourceMappingURL=internal.js.map