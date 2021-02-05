import { configureStore } from '@reduxjs/toolkit'

import navReducer from './navSlice'
import uiReducer from './uiSlice'
import booksReducer from './booksSlice'
import userReducer from './userSlice'
import shelvesReducer from './shelvesSlice'

const store = configureStore({
    reducer: {
        shelves: shelvesReducer,
        nav: navReducer,
        ui: uiReducer,
        books: booksReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store