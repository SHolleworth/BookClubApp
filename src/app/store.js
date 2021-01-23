import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navigation/navSlice'

export default configureStore({
    reducer: {
        nav: navReducer
    }
})