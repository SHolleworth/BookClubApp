import { createSlice } from "@reduxjs/toolkit"
import { ClubInviteReceive, ClubObject, ClubStateObject } from "../../../types"
import { RootState } from "./store"

const initialState: ClubStateObject = { clubs: [], invites: [] }

const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {

        setClubs(state, action) {

            if(action.payload) {

                //Empty the array
                state.clubs.length = 0

                let newClubs: ClubObject[] = []

                if(Array.isArray(action.payload)){

                    newClubs = action.payload
            
                }
                else {

                    newClubs = [action.payload]

                }
                
                newClubs.forEach(club => state.clubs.push(club))

            }
        },
        addInvite(state, action) {

            if(action.payload) {

                state.invites.push(action.payload)

            } 

        },
        setInvites(state, action) {

            if(action.payload) {

                state.invites.length = 0

                let newInvites: ClubInviteReceive[] = []

                if(Array.isArray(action.payload)){

                    newInvites = action.payload
            
                }
                else {

                    newInvites = [action.payload]

                }
                
                newInvites.forEach(invite => state.invites.push(invite))
            }

        }

    }
})

export const getClubs = (state: RootState) => state.clubs.clubs

export default clubsSlice.reducer

export const  { setClubs, setInvites, addInvite } = clubsSlice.actions