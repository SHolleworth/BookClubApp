import { createSlice } from "@reduxjs/toolkit";
import { UiStateObject } from "../../../types";
import { RootState } from "./store";

const initialState: UiStateObject = {
    tabWidth: null,

    showingBookDetailWindow: false,
    bookForDetailWindow: null,

    showingDeleteShelfDialogue: false,
    shelfForDeletion: null,

    showingAddBookDialogue: false,
    bookForAddBookDialogue: null,

    showingDeleteBookDialogue: false,

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

        openDeleteShelfDialogue(state, action) {
            state.shelfForDeletion = action.payload
            state.showingDeleteShelfDialogue = true
        },
        closeDeleteShelfDialogue(state) {
            state.showingDeleteShelfDialogue = false
        },

        openAddBookDialogue(state, action) {
            state.bookForAddBookDialogue = action.payload
            state.showingAddBookDialogue = true
        },
        closeAddBookDialogue(state) {
            state.showingAddBookDialogue = false
            state.bookForAddBookDialogue = null
        },

        openDeleteBookDialogue(state, action) {
            state.showingDeleteBookDialogue = true
        },
        closeDeleteBookDialogue(state) {
            state.showingDeleteBookDialogue = false
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
    openDeleteShelfDialogue,
    closeDeleteShelfDialogue, 
    openAddBookDialogue, 
    closeAddBookDialogue,
    openDeleteBookDialogue,
    closeDeleteBookDialogue,
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