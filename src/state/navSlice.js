"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClubTab = exports.updateTab = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = { tab: 0, clubTab: 0 };
var navSlice = toolkit_1.createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        updateTab: function (state, action) {
            state.tab = action.payload;
        },
        updateClubTab: function (state, action) {
            state.clubTab = action.payload;
        }
    }
});
exports.updateTab = (_a = navSlice.actions, _a.updateTab), exports.updateClubTab = _a.updateClubTab;
exports.default = navSlice.reducer;
