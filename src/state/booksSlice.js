import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {

            state.push(action.payload)

        },
        setBooks(state, action) {

            state = [...action.payload]

        }
    },
})

export default booksSlice.reducer

export const { addBook, setBooks } = booksSlice.actions