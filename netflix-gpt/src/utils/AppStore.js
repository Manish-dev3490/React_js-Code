import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "../utils/userSlice"
import moviesliceReducer from "../utils/movieSlice"
import GPTReducer from "../utils/GPTSlice";

const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        movies:moviesliceReducer,
        GPTPage:GPTReducer
    }
})
export default AppStore;