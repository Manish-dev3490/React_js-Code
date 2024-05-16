// In this File i am creating a redux store for my Large Applciation
import {configureStore} from "@reduxjs/toolkit"
import FormReducer from "./FormSlice"
import UserReducer from "./UserSlice"
 export const Application_Store=configureStore({
    reducer:{
        user:UserReducer,
        form:FormReducer

    }
})
