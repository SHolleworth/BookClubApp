import { createSlice } from "@reduxjs/toolkit";
import { BookObject } from "../objects/Book";

const initialState: BookObject[] = []

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

            const newBooks: BookObject[] = action.payload
            
            newBooks.forEach(book => state.push(book))

            console.log(state)

        }
    },
})

export default booksSlice.reducer

export const { addBook, setBooks } = booksSlice.actions