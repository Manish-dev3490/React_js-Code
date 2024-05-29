// In this File i am creating a redux store for my Large Applciation
import {configureStore} from "@reduxjs/toolkit"
import FormReducer from "./FormSlice"
import UserReducer from "./UserSlice"
import VideosdataReducer from "./Videosdata"
import suggestionSlice from "./suggestion"
 export const Application_Store=configureStore({
    reducer:{
        user:UserReducer,
        form:FormReducer,
        Videos:VideosdataReducer,
        suggestions:suggestionSlice

    }
})
