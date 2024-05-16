import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return state= action.payload;
        }
    }
})

export default UserSlice.reducer;
export const {addUser}=UserSlice.actions;