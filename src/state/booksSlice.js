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
            var newBook = action.payload;
            state.push(newBook);
        },
        setBooks: function (state, action) {
            if (action.payload) {
                //Empty the array
                state.length = 0;
                var newBooks = [];
                if (Array.isArray(action.payload)) {
                    newBooks = action.payload;
                }
                else {
                    newBooks = [action.payload];
                }
                newBooks.forEach(function (book) { return state.push(book); });
            }
        }
    },
});
exports.default = booksSlice.reducer;
exports.addBook = (_a = booksSlice.actions, _a.addBook), exports.setBooks = _a.setBooks;
