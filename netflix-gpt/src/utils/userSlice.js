import { createSlice } from "@reduxjs/toolkit";

const User=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        }
        ,
        removeuser:(state,action)=>{
            return null
        }
    }
})

export  default User