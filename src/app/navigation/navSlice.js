import { createSlice } from '@reduxjs/toolkit'

const initialState = { tab : 0 }

const navSlice =  createSlice({
    name: 'nav',
    initialState,
    reducers: {
        updateTab(state, action) {
            state.tab = action.payload
        }
    }
})

export const { updateTab } = navSlice.actions

export default navSlice.reducer