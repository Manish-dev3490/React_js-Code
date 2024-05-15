import { createSlice } from "@reduxjs/toolkit";

const FormSlice=createSlice({
    name:"user",
    initialState:{
        isSignForm:true
    },
    reducers:{
        toggleForm:(state)=>{
            state.isSignForm=!state.isSignForm
        }
    }
})

export default FormSlice.reducer;
export const {toggleForm}=FormSlice.actions;