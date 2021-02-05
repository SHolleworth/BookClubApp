import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ShelfObject } from '../objects/Shelf'
import { RootState } from './store'

interface ShelfStateObject {
    shelves: ShelfObject[],
    status: string,
    error: string | null
}

const initialState: ShelfStateObject = {
    shelves: [],
    status: 'idle',
    error: null
}

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {
        setShelves(state, action) {

            state.shelves.length = 0

            const newShelves: ShelfObject[] = action.payload 

            action.payload.forEach((shelf: ShelfObject) => {

                state.shelves.push(shelf)
                
            })

            console.log(state.shelves)

        },

        addShelf(state, action) {

            state.shelves.push(action.payload)

        },

        setName(state, action) {

            const id: number = action.payload.id

            const newName: string = action.payload.name

            const shelfToEdit = state.shelves.find(shelf => shelf.id === id )

            if(shelfToEdit)
                shelfToEdit.name = newName
            else
                console.error(`Shelf with id ${id} not found when trying to edit shelf name.`)
        },

        findBook(state, action) {

        }
    }
})

export const getShelves = state: RootState => state.shelves.shelves

export const getShelfStatus = state => state.shelves.status

export default shelvesSlice.reducer

export const { setShelves, addShelf, setName, findBook } = shelvesSlice.actions