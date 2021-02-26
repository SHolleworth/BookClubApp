"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMeetingClubId = exports.setMeetingTime = exports.setMeetingDate = exports.setMeetingBook = exports.addInvite = exports.setInvites = exports.setClubs = exports.getMeeting = exports.getClubById = exports.getClubs = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    clubs: [],
    invites: [],
};
var clubsSlice = toolkit_1.createSlice({
    name: 'clubs',
    initialState: initialState,
    reducers: {
        setClubs: function (state, action) {
            if (action.payload) {
                //Empty the array
                state.clubs.length = 0;
                var newClubs = [];
                if (Array.isArray(action.payload))
                    newClubs = action.payload;
                else
                    newClubs = [action.payload];
                newClubs.forEach(function (club) { return state.clubs.push(club); });
                console.log(state.clubs[0].meeting);
            }
        },
        addInvite: function (state, action) {
            if (action.payload)
                state.invites.push(action.payload);
        },
        setInvites: function (state, action) {
            if (action.payload) {
                state.invites.length = 0;
                var newInvites = [];
                if (Array.isArray(action.payload))
                    newInvites = action.payload;
                else
                    newInvites = [action.payload];
                newInvites.forEach(function (invite) { return state.invites.push(invite); });
            }
        },
        setMeetingBook: function (state, action) {
            if (action.payload) {
                var _a = action.payload, clubId_1 = _a.clubId, book = _a.book;
                var index = state.clubs.findIndex(function (club) { return club.id === clubId_1; });
                console.log(index);
                state.clubs[index].meeting.book = book;
            }
        },
        setMeetingDate: function (state, action) {
            if (action.payload) {
                var _a = action.payload, date = _a.date, clubId_2 = _a.clubId;
                var year = date.year, month = date.month, day = date.day;
                var index = state.clubs.findIndex(function (club) { return club.id === clubId_2; });
                state.clubs[index].meeting.date.day = day;
                state.clubs[index].meeting.date.month = month;
                state.clubs[index].meeting.date.year = year;
            }
        },
        setMeetingTime: function (state, action) {
            if (action.payload) {
                var _a = action.payload, time = _a.time, clubId_3 = _a.clubId;
                var minutes = time.minutes, hours = time.hours;
                var index = state.clubs.findIndex(function (club) { return club.id === clubId_3; });
                state.clubs[index].meeting.time.minutes = minutes;
                state.clubs[index].meeting.time.hours = hours;
                console.log(state.clubs[index].meeting.time);
            }
        },
        setMeetingClubId: function (state, action) {
            if (action.payload) {
                var clubId_4 = action.payload;
                var index = state.clubs.findIndex(function (club) { return club.id === clubId_4; });
                state.clubs[index].meeting.clubId = clubId_4;
            }
        },
    }
});
exports.getClubs = function (state) { return state.clubs.clubs; };
exports.getClubById = function (state, clubId) { return state.clubs.clubs.find(function (club) { return club.id === clubId; }); };
exports.getMeeting = function (state, clubId) { var _a; return (_a = state.clubs.clubs.find(function (club) { return club.id === clubId; })) === null || _a === void 0 ? void 0 : _a.meeting; };
exports.default = clubsSlice.reducer;
exports.setClubs = (_a = clubsSlice.actions, _a.setClubs), exports.setInvites = _a.setInvites, exports.addInvite = _a.addInvite, exports.setMeetingBook = _a.setMeetingBook, exports.setMeetingDate = _a.setMeetingDate, exports.setMeetingTime = _a.setMeetingTime, exports.setMeetingClubId = _a.setMeetingClubId;
