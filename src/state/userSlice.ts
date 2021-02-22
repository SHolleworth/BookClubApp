import { createSlice } from "@reduxjs/toolkit";
import { UserObject, UserStateObject } from "../../../types";
import { RootState } from "./store";

const initialState: UserStateObject = {
    currentUser: { id: null, username: null }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setCurrentUser(state, action: { payload: UserObject }) {

            const newUser: UserObject = action.payload

            state.currentUser = newUser

        }
    }
})

export const getCurrentUser = (state: RootState) => state.user.currentUser

export default userSlice.reducer

export const { setCurrentUser } = userSlice.actions