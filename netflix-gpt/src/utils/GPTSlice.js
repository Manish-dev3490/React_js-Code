import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPTSlice",
    initialState:{
        gptmoviesresult:null
    },
    reducers:{
        addGPTResultMovies:(state,action)=>{
            state.gptmoviesresult=action.payload;
        }
    }
})

export default GPTSlice.reducer;
export const {addGPTResultMovies}=GPTSlice.actions