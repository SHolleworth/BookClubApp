import { configureStore } from '@reduxjs/toolkit'
import navReducer from './NavBar/navSlice'
import shelvesReducer from '../tabs/Shelves/shelvesSlice'

export default configureStore({
    reducer: {
        nav: navReducer,
        shelves: shelvesReducer,
    }
})