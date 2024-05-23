import {createSlice} from "@reduxjs/toolkit"
const VideoSlice=createSlice({
name:"videos",
initialState :{
    popularVideos:null,
    videoId:"",
    movieDetails:""
},
reducers:{
    addPopularMovies:(state,action)=>{
        state.popularVideos=action.payload;
    },
    addVideoId:(state,action)=>{
        state.videoId=action.payload;
    },
    addmovieDetails:(state,action)=>{
        state.movieDetails=action.payload;
    }
}
})

export default VideoSlice.reducer;
export const {addPopularMovies,addVideoId,addmovieDetails}=VideoSlice.actions