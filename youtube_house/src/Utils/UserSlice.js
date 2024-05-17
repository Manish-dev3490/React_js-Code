import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(action)=>{
            return action.payload;
        }
    }
})

export default UserSlice.reducer;
export const {addUser}=UserSlice.actions;