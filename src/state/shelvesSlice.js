import { createSlice } from '@reduxjs/toolkit'
import Shelf from '../objects/objects/shelf/Shelf'

const shelfInfo = {
    name: "Test Shelf 1",
}

const initialState = [{...new Shelf(null, null, shelfInfo)}]

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {
        setShelves(state, action) {
            state.shelves = action.payload
        },
        addShelf(state, action) {
            state.push(action.payload)
        },
        setName(state, action) {
            const { shelfId, name } = action.payload
            state.find(shelf => shelf.id === shelfId ).info.name = name
        },
        findBook(state, action) {

        }
    }
})

export const getShelves = state => state.shelves

export default shelvesSlice.reducer

export const { setShelves, addShelf, setName, findBook } = shelvesSlice.actions