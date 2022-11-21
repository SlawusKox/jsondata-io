"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataSync = exports.readDataSync = void 0;
const fs = require("fs");
function readDataSync(options) {
    const data = fs.readFileSync(options.path, { encoding: "utf-8" });
    // if file contains information, return it, otherwise return empty array
    const parsedData = data ? JSON.parse(data) : [];
    if (options === null || options === void 0 ? void 0 : options.callback)
        options === null || options === void 0 ? void 0 : options.callback(parsedData);
    return parsedData;
}
exports.readDataSync = readDataSync;
function writeDataSync(options) {
    let singleObj = null;
    if (!(options.data instanceof Array)) {
        // Set new value to singleObj
        singleObj = options.data;
        if (options.type === "array") {
            // Save data to array
            options.data = readDataSync({
                path: options.path,
            });
            options.data.push(singleObj);
        }
    }
    fs.writeFileSync(options.path, JSON.stringify(options.data, undefined, 2), {
        encoding: "utf-8",
    });
    if (options === null || options === void 0 ? void 0 : options.callback)
        return options === null || options === void 0 ? void 0 : options.callback(singleObj ? singleObj : options.data);
}
exports.writeDataSync = writeDataSync;
//# sourceMappingURL=index.js.map