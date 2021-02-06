"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentUser = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    currentUser: { id: null, username: null }
};
var userSlice = toolkit_1.createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setCurrentUser: function (state, action) {
            var newUser = action.payload;
            state.currentUser = newUser;
        }
    }
});
exports.default = userSlice.reducer;
exports.setCurrentUser = userSlice.actions.setCurrentUser;
