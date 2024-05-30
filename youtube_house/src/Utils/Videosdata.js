import {createSlice} from "@reduxjs/toolkit"
const VideoSlice=createSlice({
name:"videos",
initialState :{
    popularVideos:null,
    videoId:"",
    movieDetails:"",
    comments:""
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
    },
    addComments:(state,action)=>{
        state.comments=action.payload
    }
}
})

export default VideoSlice.reducer;
export const {addPopularMovies,addVideoId,addmovieDetails,addComments}=VideoSlice.actions