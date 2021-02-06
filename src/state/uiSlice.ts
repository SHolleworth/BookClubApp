import { createSlice } from "@reduxjs/toolkit";
import { UiStateObject } from "../../../types";

const initialState: UiStateObject = {
    tabWidth: null,
    showingBookDetailWindow: false,
    bookForDetailWindow: null,
    showingAddBookDialogue: false,
    bookForAddBookDialogue: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTabWidth(state, action) {
            state.tabWidth = action.payload
        },
        openBookDetailWindow(state, action) {
            state.bookForDetailWindow = action.payload
            state.showingBookDetailWindow = true
        },
        closeBookDetailWindow(state) {
            state.showingBookDetailWindow = false
            state.bookForDetailWindow = null
        },
        openAddBookDialogue(state, action) {
            state.bookForAddBookDialogue = action.payload
            state.showingAddBookDialogue = true
        },
        closeAddBookDialogue(state) {
            state.showingAddBookDialogue = false
            state.bookForAddBookDialogue = null
        }
    }
})

export const { 
    setTabWidth, 
    openBookDetailWindow, 
    closeBookDetailWindow, 
    openAddBookDialogue, 
    closeAddBookDialogue 
} = uiSlice.actions

export default uiSlice.reducer