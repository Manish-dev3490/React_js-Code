import { createSlice } from "@reduxjs/toolkit";

 const GPTSlice=createSlice({
    name:"gptpage",
    initialState:{
        toggleGptPage:false
    },
    reducers:{
        addToggleToGPTButton:(state)=>{
            state.toggleGptPage=!state.toggleGptPage
        }
    }
})

export default GPTSlice.reducer;
export const {addToggleToGPTButton}=GPTSlice.actions;
