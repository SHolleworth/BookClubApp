import { createSlice } from "@reduxjs/toolkit";
import { UiStateObject } from "../../../types";
import { RootState } from "./store";

const initialState: UiStateObject = {
    tabWidth: null,

    showingBookDetailWindow: false,
    bookForDetailWindow: null,

    showingAddBookDialogue: false,
    bookForAddBookDialogue: null,

    showingClubNamingWindow: false,

    clubIdForWindow: null,
    showingClubWindow: false,

    showingMeetingBookWindow: false,
    showingMeetingDateAndTimeWindow: false,
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
        },


        openClubNamingWindow(state) {
            state.showingClubNamingWindow = true
        },
        closeClubNamingWindow(state) {
            state.showingClubNamingWindow = false
        },


        openClubWindow(state, action) {
            state.clubIdForWindow = action.payload
            state.showingClubWindow = true
        },
        closeClubWindow(state) {
            state.showingClubWindow = false 
        },

        openMeetingBookWindow(state) {
            state.showingMeetingBookWindow = true
        },
        closeMeetingBookWindow(state) {
            state.showingMeetingBookWindow = false
        },

        openMeetingDateAndTimeWindow(state) {
            state.showingMeetingDateAndTimeWindow = true
        },
        closeMeetingDateAndTimeWindow(state) {
            state.showingMeetingDateAndTimeWindow = false
        },
    }
})

export const getTabWidth = (state: RootState) => state.ui.tabWidth

export const { 
    setTabWidth, 
    openBookDetailWindow, 
    closeBookDetailWindow, 
    openAddBookDialogue, 
    closeAddBookDialogue,
    openClubNamingWindow,
    closeClubNamingWindow,
    openClubWindow,
    closeClubWindow,
    openMeetingBookWindow,
    closeMeetingBookWindow,
    openMeetingDateAndTimeWindow,
    closeMeetingDateAndTimeWindow
} = uiSlice.actions

export default uiSlice.reducer