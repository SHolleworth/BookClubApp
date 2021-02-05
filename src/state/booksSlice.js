import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {

            state.push(action.payload)

            console.log(state)

        },
        setBooks(state, action) {

            state.length = 0
            
            action.payload.forEach(book => state.push(book))

            console.log(state)

        }
    },
})

export default booksSlice.reducer

export const { addBook, setBooks } = booksSlice.actions