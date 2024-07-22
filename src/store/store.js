import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
//import postSlice from "./postSlice";

const store =configureStore({
    reducer:{
        auth:authSlice,
        // onPost:postSlice
    }
}    
)

export default store;