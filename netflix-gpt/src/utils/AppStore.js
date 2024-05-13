import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "../utils/userSlice"
import moviesliceReducer from "../utils/movieSlice"
import Langreducer from "../utils/LanguageConfig"
import GPTReducer from "../utils/GPTSlice"
import SavedMovieSliceReducer from "./SavedMovieSlice"
const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        movies:moviesliceReducer,
        LanguageToChoose:Langreducer,
        GPTMovieResult:GPTReducer,
        SavedMovieSlice:SavedMovieSliceReducer
    }
})
export default AppStore;