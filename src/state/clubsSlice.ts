import { createSlice } from "@reduxjs/toolkit"
import { ClubInviteReceive, ClubObject, ClubStateObject } from "../../../types"
import { RootState } from "./store"

const initialState: ClubStateObject = { 
    clubs: [], 
    invites: [],
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

                const { clubId, book } = action.payload

                const index = state.clubs.findIndex(club => club.id === clubId)

                state.clubs[index].meeting.book = book 

            }
        },
        setMeetingDate(state, action) {

            if(action.payload){

                const { date , clubId } = action.payload

                const { year, month, day } = date

                const index = state.clubs.findIndex(club => club.id === clubId)

                state.clubs[index].meeting.date.day = day

                state.clubs[index].meeting.date.month = month

                state.clubs[index].meeting.date.year = year

            }
        },
        setMeetingTime(state, action) {
            if(action.payload){

                const { time, clubId } = action.payload

                const { minutes, hours } = time

                const index = state.clubs.findIndex(club => club.id === clubId)

                state.clubs[index].meeting.time.minutes = minutes

                state.clubs[index].meeting.time.hours = hours

            }
        },
        setMeetingClubId(state, action) {
            if(action.payload){

                const clubId = action.payload

                const index = state.clubs.findIndex(club => club.id === clubId)

                state.clubs[index].meeting.clubId = clubId
            }
        },
    }
})

export const getClubs = (state: RootState) => state.clubs.clubs

export const getClubById = (state: RootState, clubId: number) => state.clubs.clubs.find((club: ClubObject) => club.id === clubId)

export const getMeeting = (state: RootState, clubId: number) => state.clubs.clubs.find((club: ClubObject) => club.id === clubId)?.meeting 

export default clubsSlice.reducer

export const  { setClubs, setInvites, addInvite, setMeetingBook, setMeetingDate, setMeetingTime, setMeetingClubId } = clubsSlice.actions