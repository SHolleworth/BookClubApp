"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMeetingDateAndTimeWindow = exports.openMeetingDateAndTimeWindow = exports.closeMeetingBookWindow = exports.openMeetingBookWindow = exports.closeClubWindow = exports.openClubWindow = exports.closeClubNamingWindow = exports.openClubNamingWindow = exports.closeDeleteBookDialogue = exports.openDeleteBookDialogue = exports.closeAddBookDialogue = exports.openAddBookDialogue = exports.closeDeleteShelfDialogue = exports.openDeleteShelfDialogue = exports.closeBookDetailWindow = exports.openBookDetailWindow = exports.setTabWidth = exports.getTabWidth = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    tabWidth: null,
    showingBookDetailWindow: false,
    bookForDetailWindow: null,
    showingDeleteShelfDialogue: false,
    shelfForDeletion: null,
    showingAddBookDialogue: false,
    bookForAddBookDialogue: null,
    showingDeleteBookDialogue: false,
    showingClubNamingWindow: false,
    clubIdForWindow: null,
    showingClubWindow: false,
    showingMeetingBookWindow: false,
    showingMeetingDateAndTimeWindow: false,
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
        openDeleteShelfDialogue: function (state, action) {
            state.shelfForDeletion = action.payload;
            state.showingDeleteShelfDialogue = true;
        },
        closeDeleteShelfDialogue: function (state) {
            state.showingDeleteShelfDialogue = false;
        },
        openAddBookDialogue: function (state, action) {
            state.bookForAddBookDialogue = action.payload;
            state.showingAddBookDialogue = true;
        },
        closeAddBookDialogue: function (state) {
            state.showingAddBookDialogue = false;
            state.bookForAddBookDialogue = null;
        },
        openDeleteBookDialogue: function (state, action) {
            state.showingDeleteBookDialogue = true;
        },
        closeDeleteBookDialogue: function (state) {
            state.showingDeleteBookDialogue = false;
        },
        openClubNamingWindow: function (state) {
            state.showingClubNamingWindow = true;
        },
        closeClubNamingWindow: function (state) {
            state.showingClubNamingWindow = false;
        },
        openClubWindow: function (state, action) {
            state.clubIdForWindow = action.payload;
            state.showingClubWindow = true;
        },
        closeClubWindow: function (state) {
            state.showingClubWindow = false;
        },
        openMeetingBookWindow: function (state) {
            state.showingMeetingBookWindow = true;
        },
        closeMeetingBookWindow: function (state) {
            state.showingMeetingBookWindow = false;
        },
        openMeetingDateAndTimeWindow: function (state) {
            state.showingMeetingDateAndTimeWindow = true;
        },
        closeMeetingDateAndTimeWindow: function (state) {
            state.showingMeetingDateAndTimeWindow = false;
        },
    }
});
exports.getTabWidth = function (state) { return state.ui.tabWidth; };
exports.setTabWidth = (_a = uiSlice.actions, _a.setTabWidth), exports.openBookDetailWindow = _a.openBookDetailWindow, exports.closeBookDetailWindow = _a.closeBookDetailWindow, exports.openDeleteShelfDialogue = _a.openDeleteShelfDialogue, exports.closeDeleteShelfDialogue = _a.closeDeleteShelfDialogue, exports.openAddBookDialogue = _a.openAddBookDialogue, exports.closeAddBookDialogue = _a.closeAddBookDialogue, exports.openDeleteBookDialogue = _a.openDeleteBookDialogue, exports.closeDeleteBookDialogue = _a.closeDeleteBookDialogue, exports.openClubNamingWindow = _a.openClubNamingWindow, exports.closeClubNamingWindow = _a.closeClubNamingWindow, exports.openClubWindow = _a.openClubWindow, exports.closeClubWindow = _a.closeClubWindow, exports.openMeetingBookWindow = _a.openMeetingBookWindow, exports.closeMeetingBookWindow = _a.closeMeetingBookWindow, exports.openMeetingDateAndTimeWindow = _a.openMeetingDateAndTimeWindow, exports.closeMeetingDateAndTimeWindow = _a.closeMeetingDateAndTimeWindow;
exports.default = uiSlice.reducer;
