import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice'
import catagorySlice from './CatagorySlice'
import searchSlice from '../redux/SearchSlice'

export const store = configureStore({
    reducer:{
        cart : cartSlice,
        catagory : catagorySlice,
        search:searchSlice
    }
})