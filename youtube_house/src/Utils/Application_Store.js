// In this File i am creating a redux store for my Large Applciation
import {configureStore} from "@reduxjs/toolkit"
import FormReducer from "./FormSlice"
 export const Application_Store=configureStore({
    reducer:{
        form:FormReducer,
    }
})
