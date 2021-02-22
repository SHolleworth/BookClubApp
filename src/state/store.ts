import { configureStore } from '@reduxjs/toolkit'

import navReducer from './navSlice'
import uiReducer from './uiSlice'
import booksReducer from './booksSlice'
import userReducer from './userSlice'
import shelvesReducer from './shelvesSlice'
import clubsReducer from './clubsSlice'

const store = configureStore({
    reducer: {
        shelves: shelvesReducer,
        nav: navReducer,
        ui: uiReducer,
        books: booksReducer,
        user: userReducer,
        clubs: clubsReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export default store