import { createSlice } from "@reduxjs/toolkit";

const FormSlice=createSlice({
    name:"form",
    initialState:{
        isSignForm:true
    },
    reducers:{
        toggleForm:(state)=>{
            state.isSignForm=!state.isSignForm
        },
        removeForm:(state)=>{
            state.isSignForm=false
        }
    }
})

export default FormSlice.reducer;
export const {toggleForm,removeForm}=FormSlice.actions;