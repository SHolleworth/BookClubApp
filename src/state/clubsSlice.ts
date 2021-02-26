import { createSlice } from "@reduxjs/toolkit"
import { ClubInviteReceive, ClubObject, ClubStateObject } from "../../../types"
import { RootState } from "./store"

const initialState: ClubStateObject = { 
    clubs: [], 
    invites: [], 
    meeting: 
    { 
        book: null,
        date: {
            day: null,
            month: null,
            year: null
        }, 
        time: {
            minutes: null,
            hours: null
        },
        active: false,
    } 
}

const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {

        setClubs(state, action) {

            if(action.payload) {

                //Empty the array
                state.clubs.length = 0

                let newClubs: ClubObject[] = []

                if(Array.isArray(action.payload))

                    newClubs = action.payload

                else

                    newClubs = [action.payload]
                
                newClubs.forEach(club => state.clubs.push(club))
            }
        },
        addInvite(state, action) {

            if(action.payload) 

                state.invites.push(action.payload)

        },
        setInvites(state, action) {

            if(action.payload) {

                state.invites.length = 0

                let newInvites: ClubInviteReceive[] = []

                if(Array.isArray(action.payload))

                    newInvites = action.payload
            
                else

                    newInvites = [action.payload]
                
                newInvites.forEach(invite => state.invites.push(invite))
            }
        },
        setMeetingBook(state, action) {

            if(action.payload){

                state.meeting.book = action.payload

            }
        },
        setMeetingDate(state, action) {
            if(action.payload){

                state.meeting.date.day = action.payload.day

                state.meeting.date.month = action.payload.month

                state.meeting.date.year = action.payload.year

            }
        },
        setMeetingTime(state, action) {
            if(action.payload){

                state.meeting.time.minutes = action.payload.minutes

                state.meeting.time.hours = action.payload.hours

            }
        },
        setMeeting(state, action) {
            if(action.payload){

                state.meeting.active = action.payload

            }
        }
    }
})

export const getClubs = (state: RootState) => state.clubs.clubs

export const getClubById = (state: RootState, clubId: number) => state.clubs.clubs.find((club: ClubObject) => club.id === clubId)

export default clubsSlice.reducer

export const  { setClubs, setInvites, addInvite, setMeetingBook, setMeetingDate, setMeetingTime, setMeeting } = clubsSlice.actions