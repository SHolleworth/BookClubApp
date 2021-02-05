import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: { id: null, username: null }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
            console.log(state)
        }
    }
})

export default userSlice.reducer

export const { setCurrentUser } = userSlice.actions