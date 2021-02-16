import { createSlice } from '@reduxjs/toolkit'
import { NavStateObject } from '../../../types'

const initialState: NavStateObject = { tab : 0, clubTab: 0 }

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        updateTab(state, action) {

            state.tab = action.payload

        },
        updateClubTab(state, action) {

            state.clubTab = action.payload

        }
    }
})

export const { updateTab, updateClubTab } = navSlice.actions

export default navSlice.reducer