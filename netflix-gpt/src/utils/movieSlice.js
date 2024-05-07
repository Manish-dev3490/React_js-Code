import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        movietrailor:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
             state.nowplayingmovies=action.payload;
        },
        addMovieTrailor:(state,action)=>{
            state.movietrailor=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularmovies=action.payload;
       },
    }
})
export default movieSlice.reducer;
export const {addNowPlayingMovies,addMovieTrailor,addPopularMovies}=movieSlice.actions;