"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMeeting = exports.setMeetingTime = exports.setMeetingDate = exports.setMeetingBook = exports.addInvite = exports.setInvites = exports.setClubs = exports.getClubById = exports.getClubs = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    clubs: [],
    invites: [],
    meeting: {
        book: null,
        date: {
            day: null,
            month: null,
            year: null
        },
        time: {
            minutes: null,
            hours: null
        },
        active: false,
    }
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
                state.meeting.book = action.payload;
            }
        },
        setMeetingDate: function (state, action) {
            if (action.payload) {
                state.meeting.date.day = action.payload.day;
                state.meeting.date.month = action.payload.month;
                state.meeting.date.year = action.payload.year;
            }
        },
        setMeetingTime: function (state, action) {
            if (action.payload) {
                state.meeting.time.minutes = action.payload.minutes;
                state.meeting.time.hours = action.payload.hours;
            }
        },
        setMeeting: function (state, action) {
            if (action.payload) {
                state.meeting.active = action.payload;
            }
        }
    }
});
exports.getClubs = function (state) { return state.clubs.clubs; };
exports.getClubById = function (state, clubId) { return state.clubs.clubs.find(function (club) { return club.id === clubId; }); };
exports.default = clubsSlice.reducer;
exports.setClubs = (_a = clubsSlice.actions, _a.setClubs), exports.setInvites = _a.setInvites, exports.addInvite = _a.addInvite, exports.setMeetingBook = _a.setMeetingBook, exports.setMeetingDate = _a.setMeetingDate, exports.setMeetingTime = _a.setMeetingTime, exports.setMeeting = _a.setMeeting;
