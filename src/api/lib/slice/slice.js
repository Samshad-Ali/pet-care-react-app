import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:'/petSlice',
    initialState:{
        data :null,
    },
    reducers:{
        getListData:(state,action)=>{
            state.data = action.payload;
        }
    }
})

export default slice.reducer;
export const {getListData,} = slice.actions;
