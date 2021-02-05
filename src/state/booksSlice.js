"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBooks = exports.addBook = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [];
var booksSlice = toolkit_1.createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        addBook: function (state, action) {
            state.push(action.payload);
            console.log(state);
        },
        setBooks: function (state, action) {
            state.length = 0;
            var newBooks = action.payload;
            newBooks.forEach(function (book) { return state.push(book); });
            console.log(state);
        }
    },
});
exports.default = booksSlice.reducer;
exports.addBook = (_a = booksSlice.actions, _a.addBook), exports.setBooks = _a.setBooks;
