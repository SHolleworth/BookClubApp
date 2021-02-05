import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Shelf from '../objects/objects/shelf/Shelf'

const initialState = {
    shelves: [{...new Shelf(null, null, "Test Shelf 1")}],
    status: 'idle',
    error: null
}

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {
        setShelves(state, action) {

            state.shelves = [...action.payload]

        },

        addShelf(state, action) {

            state.shelves.push(action.payload)

        },

        setName(state, action) {

            const { shelfId, name } = action.payload

            state.shelves.find(shelf => shelf.id === shelfId ).name = name

        },
        
        findBook(state, action) {

        }
    }
})

export const getShelves = state => state.shelves.shelves

export const getShelfStatus = state => state.shelves.status

export default shelvesSlice.reducer

export const { setShelves, addShelf, setName, findBook } = shelvesSlice.actions