import { combineReducers, configureStore } from "@reduxjs/toolkit"
import reviewSlice from "../Reducer/ReviewReducer";

let MainReducer = combineReducers({
    //state : reducer slice
    reviews: reviewSlice.reducer
}) 

//store 
const AppStore = configureStore({
    reducer: MainReducer,
    devTolls: true
})

export default AppStore