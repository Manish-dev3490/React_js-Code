import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        userData:null
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export default UserSlice.reducer;
export const {addUser}=UserSlice.actions;