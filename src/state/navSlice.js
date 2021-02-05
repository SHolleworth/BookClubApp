"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTab = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = { tab: 0 };
var navSlice = toolkit_1.createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        updateTab: function (state, action) {
            state.tab = action.payload;
        }
    }
});
exports.updateTab = navSlice.actions.updateTab;
exports.default = navSlice.reducer;
