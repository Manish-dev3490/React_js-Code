import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "../utils/userSlice"
import moviesliceReducer from "../utils/movieSlice"
import Langreducer from "../utils/LanguageConfig"

const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        movies:moviesliceReducer,
        LanguageToChoose:Langreducer
    }
})
export default AppStore;