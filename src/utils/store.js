
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
const store =configureStore({
    reducer:{
        app:appSlice,
        // viewpost:viewpostSlice
    
    }
})

export default store