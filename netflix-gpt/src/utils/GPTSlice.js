import { createSlice } from "@reduxjs/toolkit";

 const GPTSlice=createSlice({
    name:"gptpage",
    initialState:{
        toggleGptPage:false,
        GPTSearchMovieResults:null,
        GPTMovieTitle:null
    },
    reducers:{
        addToggleToGPTButton:(state)=>{
            state.toggleGptPage=!state.toggleGptPage
        },
        addGPTResultMovies:(state,action)=>{
            state.GPTSearchMovieResults=action.payload
        },
        addGPTMovieTitle:(state,action)=>{
            state.GPTMovieTitle=action.payload
        },
        removeGPTMovieandTitle:(state)=>{
            state.GPTSearchMovieResults=null
        }
    }
})

export default GPTSlice.reducer;
export const {addToggleToGPTButton,addGPTResultMovies,addGPTMovieTitle,removeGPTMovieandTitle}=GPTSlice.actions;
