"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setName = exports.addShelf = exports.setShelves = exports.getShelfStatus = exports.getShelves = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    shelves: [],
    status: 'idle',
    error: null
};
var shelvesSlice = toolkit_1.createSlice({
    name: 'shelves',
    initialState: initialState,
    reducers: {
        setShelves: function (state, action) {
            if (action.payload) {
                state.shelves.length = 0;
                var newShelves = [];
                if (Array.isArray(action.payload)) {
                    newShelves = action.payload;
                }
                else {
                    newShelves = [action.payload];
                }
                newShelves.forEach(function (shelf) {
                    state.shelves.push(shelf);
                });
            }
            else {
                console.error("Error setting book, no payload delivered with action.");
            }
        },
        addShelf: function (state, action) {
            if (action.payload) {
                state.shelves.push(action.payload);
            }
            else {
                console.error("Error adding book, no payload delivered with action.");
            }
        },
        setName: function (state, action) {
            var id = action.payload.id;
            var newName = action.payload.name;
            var shelfToEdit = state.shelves.find(function (shelf) { return shelf.id === id; });
            if (shelfToEdit) {
                shelfToEdit.name = newName;
            }
            else {
                console.error("Shelf with id " + id + " not found when trying to edit shelf name.");
            }
        },
    }
});
exports.getShelves = function (state) { return state.shelves.shelves; };
exports.getShelfStatus = function (state) { return state.shelves.status; };
exports.default = shelvesSlice.reducer;
exports.setShelves = (_a = shelvesSlice.actions, _a.setShelves), exports.addShelf = _a.addShelf, exports.setName = _a.setName;
