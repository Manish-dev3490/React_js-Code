import {createSlice} from "@reduxjs/toolkit"
const LanguageConfig=createSlice({
name:"config",
initialState:{
    lang:"en"
},
reducers:{
    addlang:(state,action)=>{
        state.lang=action.payload
    }
}
})
export default LanguageConfig.reducer;
export const {addlang}=LanguageConfig.actions;