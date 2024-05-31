import {createSlice} from "@reduxjs/toolkit"
const VideoSlice=createSlice({
name:"videos",
initialState :{
    popularVideos:null,
    videoId:"",
    movieDetails:"",
    comments:"",
    searchedData:"",
    inputText:"",
    queryData:""
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
    },
    addSearchedData:(state,action)=>{
        state.searchedData=action.payload
    },
    addInputText:(state,action)=>{
        state.inputText=action.payload
    },
    
}
})

export default VideoSlice.reducer;
export const {addPopularMovies,addVideoId,addmovieDetails,addComments,addSearchedData,addInputText}=VideoSlice.actions