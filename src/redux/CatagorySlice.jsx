import { createSlice } from "@reduxjs/toolkit";

const catagorySlice = createSlice({
    name:'catagory',
    initialState : {
        catagory : "All"
    },
    reducers:{
        addCatagory :(state,action)=>{
            state.catagory = action.payload
        }
    }
})
export const {addCatagory} = catagorySlice.actions
export default catagorySlice.reducer