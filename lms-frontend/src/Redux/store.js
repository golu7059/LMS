import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice.js'
import courseSliceReducer from './Slices/CourseSlice.js'
import RazorPaySliceReducer from "./Slices/RazorPaySlice.js";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay : RazorPaySliceReducer
    },
    devTools: true
})

export default store;