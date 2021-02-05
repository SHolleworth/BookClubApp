"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAddBookDialogue = exports.openAddBookDialogue = exports.closeBookDetailWindow = exports.openBookDetailWindow = exports.setTabWidth = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    tabWidth: null,
    showingBookDetailWindow: false,
    bookForDetailWindow: null,
    showingAddBookDialogue: false,
    bookForAddBookDialogue: null
};
var uiSlice = toolkit_1.createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setTabWidth: function (state, action) {
            state.tabWidth = action.payload;
        },
        openBookDetailWindow: function (state, action) {
            state.bookForDetailWindow = action.payload;
            state.showingBookDetailWindow = true;
        },
        closeBookDetailWindow: function (state) {
            state.showingBookDetailWindow = false;
            state.bookForDetailWindow = null;
        },
        openAddBookDialogue: function (state, action) {
            state.bookForAddBookDialogue = action.payload;
            state.showingAddBookDialogue = true;
        },
        closeAddBookDialogue: function (state) {
            state.showingAddBookDialogue = false;
            state.bookForAddBookDialogue = null;
        }
    }
});
exports.setTabWidth = (_a = uiSlice.actions, _a.setTabWidth), exports.openBookDetailWindow = _a.openBookDetailWindow, exports.closeBookDetailWindow = _a.closeBookDetailWindow, exports.openAddBookDialogue = _a.openAddBookDialogue, exports.closeAddBookDialogue = _a.closeAddBookDialogue;
exports.default = uiSlice.reducer;
