import { createSlice } from "@reduxjs/toolkit";
import { UserObject } from "../objects/User";

interface UserStateObject {
    currentUser: UserObject
}

const initialState: UserStateObject = {
    currentUser: { id: null, username: null }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setCurrentUser(state, action) {

            const newUser: UserObject = action.payload

            state.currentUser = newUser

            console.log(state)

        }
    }
})

export default userSlice.reducer

export const { setCurrentUser } = userSlice.actions