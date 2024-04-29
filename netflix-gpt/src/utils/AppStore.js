import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "../utils/userSlice"
const AppStore = configureStore({
    reducer: {
        user: UserReducer
    }
})
export default AppStore;