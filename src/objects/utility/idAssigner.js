"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function idAssigner() {
    return uuid_1.v4();
}
exports.default = idAssigner;
