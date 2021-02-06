import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ShelfObject, ShelfStateObject } from '../../../types'
import { RootState } from './store'

const initialState: ShelfStateObject = {
    shelves: [],
    status: 'idle',
    error: null
}

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {
        setShelves(state, action: { payload: ShelfObject | ShelfObject[] }) {

            if(action.payload){

                state.shelves.length = 0

                let newShelves: ShelfObject[] = []

                if(Array.isArray(action.payload)){

                    newShelves = action.payload 

                }
                else {

                    newShelves = [action.payload]

                }

                newShelves.forEach((shelf: ShelfObject) => {

                    state.shelves.push(shelf)
                    
                })
            }
            else {

                console.error("Error setting book, no payload delivered with action.")

            }
        },

        addShelf(state, action: { payload: ShelfObject }) {

            if(action.payload) {

                state.shelves.push(action.payload)

            }
            else {

                console.error("Error adding book, no payload delivered with action.")

            }


        },

        setName(state, action) {

            const id: number = action.payload.id

            const newName: string = action.payload.name

            const shelfToEdit = state.shelves.find(shelf => shelf.id === id )

            if(shelfToEdit){

                shelfToEdit.name = newName
            }
            else{

                console.error(`Shelf with id ${id} not found when trying to edit shelf name.`)

            }
        },

        findBook(state, action) {

        }
    }
})

export const getShelves = (state: RootState) => state.shelves.shelves

export const getShelfStatus = (state: RootState) => state.shelves.status

export default shelvesSlice.reducer

export const { setShelves, addShelf, setName, findBook } = shelvesSlice.actions