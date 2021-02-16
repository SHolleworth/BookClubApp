"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClubs = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [];
var clubsSlice = toolkit_1.createSlice({
    name: 'clubs',
    initialState: initialState,
    reducers: {
        setClubs: function (state, action) {
            if (action.payload) {
                //Empty the array
                state.length = 0;
                var newClubs = [];
                if (Array.isArray(action.payload)) {
                    newClubs = action.payload;
                }
                else {
                    newClubs = [action.payload];
                }
                newClubs.forEach(function (club) { return state.push(club); });
                console.log(state[0].members);
            }
        },
    }
});
exports.default = clubsSlice.reducer;
exports.setClubs = clubsSlice.actions.setClubs;
