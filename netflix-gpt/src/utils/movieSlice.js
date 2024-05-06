import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
             state.nowplayingmovies=action.payload;
        },
    }
})
export default movieSlice.reducer;
export const {addNowPlayingMovies}=movieSlice.actions;