import { createSlice } from '@reduxjs/toolkit'
import Shelf from '../../objects/objects/shelf/Shelf'

const shelfInfo = {
    name: "Test Shelf 1",
    color: null,
}

const books = []

const initialState = [{...new Shelf(null, shelfInfo, books)}]

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {
        addShelf(state, action) {
            console.log(action.payload)
            state.push(action.payload)
        },
        setName(state, action) {
            const { shelfId, name } = action.payload
            state.find(shelf => shelf.id === shelfId ).info.name = name
        },
        addBook(state, action) {

        },
        removeBook(state, action) {

        },
        findBook(state, action) {

        }
    }
})

export default shelvesSlice.reducer

export const { addShelf, setName, addBook, removeBook, findBook } = shelvesSlice.actions