import {createSlice} from "@reduxjs/toolkit"
const suggestionSlice=createSlice({
name:"suggestions",
initialState :{
    suggestion:null,
},
reducers:{
    addSuggestion:(state,action)=>{
        state.suggestion=action.payload;
    }
   
    
    
}
})

export default suggestionSlice.reducer;
export const {addSuggestion,showSuggestion,hideSuggestion}=suggestionSlice.actions