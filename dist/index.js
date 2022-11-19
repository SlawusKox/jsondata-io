"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataSync = exports.readDataSync = void 0;
const fs = require("fs");
function readDataSync(options) {
    const data = fs.readFileSync(options.path, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    if (options === null || options === void 0 ? void 0 : options.callback)
        options === null || options === void 0 ? void 0 : options.callback(parsedData);
    return parsedData;
}
exports.readDataSync = readDataSync;
function writeDataSync(options) {
    if (!(options.data instanceof Array)) {
        const dataArr = readDataSync({
            path: options.path,
        });
        dataArr.push(options.data);
        fs.writeFileSync(options.path, JSON.stringify(dataArr, undefined, 2), {
            encoding: "utf-8",
        });
        return;
    }
    else {
        fs.writeFileSync(options.path, JSON.stringify(options.data, undefined, 2), {
            encoding: "utf-8",
        });
    }
    if (options === null || options === void 0 ? void 0 : options.callback)
        return options === null || options === void 0 ? void 0 : options.callback(options.data);
}
exports.writeDataSync = writeDataSync;
//# sourceMappingURL=index.js.map