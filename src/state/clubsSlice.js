"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInvite = exports.setInvites = exports.setClubs = exports.getClubs = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = { clubs: [], invites: [] };
var clubsSlice = toolkit_1.createSlice({
    name: 'clubs',
    initialState: initialState,
    reducers: {
        setClubs: function (state, action) {
            if (action.payload) {
                //Empty the array
                state.clubs.length = 0;
                var newClubs = [];
                if (Array.isArray(action.payload)) {
                    newClubs = action.payload;
                }
                else {
                    newClubs = [action.payload];
                }
                newClubs.forEach(function (club) { return state.clubs.push(club); });
            }
        },
        addInvite: function (state, action) {
            if (action.payload) {
                state.invites.push(action.payload);
            }
        },
        setInvites: function (state, action) {
            if (action.payload) {
                state.invites.length = 0;
                var newInvites = [];
                if (Array.isArray(action.payload)) {
                    newInvites = action.payload;
                }
                else {
                    newInvites = [action.payload];
                }
                newInvites.forEach(function (invite) { return state.invites.push(invite); });
            }
        }
    }
});
exports.getClubs = function (state) { return state.clubs.clubs; };
exports.default = clubsSlice.reducer;
exports.setClubs = (_a = clubsSlice.actions, _a.setClubs), exports.setInvites = _a.setInvites, exports.addInvite = _a.addInvite;
