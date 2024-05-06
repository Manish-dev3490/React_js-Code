import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "../utils/userSlice"
import moviesliceReducer from "../utils/movieSlice"
const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        movies:moviesliceReducer,
    }
})
export default AppStore;