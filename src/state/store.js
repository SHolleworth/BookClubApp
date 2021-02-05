"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var navSlice_1 = __importDefault(require("./navSlice"));
var uiSlice_1 = __importDefault(require("./uiSlice"));
var booksSlice_1 = __importDefault(require("./booksSlice"));
var userSlice_1 = __importDefault(require("./userSlice"));
var shelvesSlice_1 = __importDefault(require("./shelvesSlice"));
var store = toolkit_1.configureStore({
    reducer: {
        shelves: shelvesSlice_1.default,
        nav: navSlice_1.default,
        ui: uiSlice_1.default,
        books: booksSlice_1.default,
        user: userSlice_1.default,
    }
});
exports.default = store;
