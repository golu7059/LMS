import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import { toast } from "react-hot-toast";

const initialState = {
    courseData:[]
}

export const getAllCourses = createAsyncThunk("/course/get",async() => {
    try {
        const response  =  axiosInstance.get("courses/");
        toast.promise(response,{
            loading : "Loading courses data",
            success : "Courses data loaded successfully",
            error : "Failed to load courses data"
        }) 
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.reponse?.data?.message);
    }
})

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload){
                state.courseData =[ ...action.payload];
            }
        })
    }
});

export default courseSlice.reducer;
