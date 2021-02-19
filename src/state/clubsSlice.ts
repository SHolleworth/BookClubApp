import { createSlice } from "@reduxjs/toolkit"
import { ClubObject } from "../../../types"

const initialState: ClubObject[] = []

const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {

        setClubs(state, action) {

            if(action.payload) {

                //Empty the array
                state.length = 0

                let newClubs: ClubObject[] = []

                if(Array.isArray(action.payload)){

                    newClubs = action.payload
            
                }
                else {

                    newClubs = [action.payload]

                }
                
                newClubs.forEach(club => state.push(club))

            }
        },

    }
})

export default clubsSlice.reducer

export const  { setClubs } = clubsSlice.actions