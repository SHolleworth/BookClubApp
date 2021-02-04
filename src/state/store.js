import { configureStore } from '@reduxjs/toolkit'

import navReducer from './navSlice'
import uiReducer from './uiSlice'
import booksReducer from './booksSlice'
import userReducer from './userSlice'
import shelvesReducer from './shelvesSlice'

export default configureStore({
    reducer: {
        shelves: shelvesReducer,
        nav: navReducer,
        ui: uiReducer,
        books: booksReducer,
        user: userReducer,
    }
})