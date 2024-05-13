import { createSlice } from "@reduxjs/toolkit";

const SavedMovieSlice=createSlice({
    name:"saved movie",
    initialState:{
        savedmovies:[]
    },
    reducers:{
        addSavedMovie:(state,action)=>{
            state.savedmovies.push(action.payload)
        },
        deleteSavedMovie:(state)=>{
            state.savedmovies.pop()
        },
        removeSavedMovie:(state)=>{
            state.savedmovies.length=0;
        },


    }
})

export default SavedMovieSlice.reducer;
export const {removeSavedMovie,addSavedMovie,deleteSavedMovie}=SavedMovieSlice.actions;