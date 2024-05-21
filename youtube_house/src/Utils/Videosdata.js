import {createSlice} from "@reduxjs/toolkit"
const VideoSlice=createSlice({
name:"videos",
initialState :{
    popularVideos:null
},
reducers:{
    addPopularMovies:(state,action)=>{
        state.popularVideos=action.payload;
    }
}
})

export default VideoSlice.reducer;
export const {addPopularMovies}=VideoSlice.actions