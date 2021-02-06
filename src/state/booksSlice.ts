import { createSlice } from "@reduxjs/toolkit";
import { BookObject } from "../../../types";

const initialState: BookObject[] = []

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {

            const newBook: BookObject = action.payload

            state.push(newBook)

        },
        setBooks(state, action: {payload: BookObject[] | BookObject}) {

            if(action.payload) {

                //Empty the array
                state.length = 0

                let newBooks: BookObject | BookObject[] = []

                if(Array.isArray(action.payload)){

                    newBooks = action.payload
            
                }
                else {

                    newBooks = [action.payload]

                }
                
                newBooks.forEach(book => state.push(book))

            }
       
        }
    },
})

export default booksSlice.reducer

export const { addBook, setBooks } = booksSlice.actions