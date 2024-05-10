import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowplayingmovies: null,
        movietrailor: null,
        moviedetail:"",
        moviedetailVideo:""
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowplayingmovies = action.payload;
        },
        addMovieTrailor: (state, action) => {
            state.movietrailor = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularmovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topratedmovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingmovies = action.payload;
        },
        addMovieDetail: (state, action) => {
            state.moviedetail = action.payload;
        },
        addMovieDetailVideo: (state, action) => {
            state.moviedetailVideo = action.payload;
        },

    }
})
export default movieSlice.reducer;
export const { addNowPlayingMovies, addMovieTrailor, addPopularMovies, addTopRatedMovies, addUpcomingMovies ,addMovieDetail,addMovieDetailVideo} = movieSlice.actions;