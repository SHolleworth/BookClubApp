import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabWidth: null,
    showingBookDetailWindow: false,
    bookForDetailWindow: {},
    showingAddBookDialogue: false,
    bookForAddBookDialogue: {}
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
            state.bookForDetailWindow = {}
        },
        openAddBookDialogue(state, action) {
            state.bookForAddBookDialogue = action.payload
            state.showingAddBookDialogue = true
        },
        closeAddBookDialogue(state) {
            state.showingAddBookDialogue = false
            state.bookForAddBookDialogue = {}
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