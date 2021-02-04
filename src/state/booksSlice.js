import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {

            state.push(action.payload)

            console.log(action.payload.shelfId)

        },
        setBooks(state, action) {

            state = action.payload

            console.log("Books: " + state)

        }
    },
})

export default booksSlice.reducer

export const { addBook, setBooks } = booksSlice.actions