import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPTSlice",
    initialState:{
        gptmoviesresult:null
    },
    reducers:{
        addGPTResultMovies:(state,action)=>{
            state.gptmoviesresult=action.payload;
        },
        addGPTMoviesName:(state,action)=>{
            state.gptmoviesname=action.payload;
        },
        removeGPTMovies:(state)=>{
            state.gptmoviesresult=null;
        }
    }
})

export default GPTSlice.reducer;
export const {addGPTResultMovies,addGPTMoviesName,removeGPTMovies}=GPTSlice.actions