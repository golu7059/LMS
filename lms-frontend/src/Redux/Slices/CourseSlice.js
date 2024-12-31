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

export const createCourse = createAsyncThunk("/course/create", async (userData) => {
    try {
        const res = axiosInstance.post("/courses/", userData);
        toast.promise(res, {
            loading: "Creating course, please wait...",
            success: (data) => {
                return data?.data?.message || "Course created successfully";
            },
            error: "Failed ! image size may be too large or something went wrong"
        });
        return (await res).data;
    } catch (error) {
        if (error.response?.data?.message === "Field value too long") {
            toast.error("Image size too large");
        } else {
            toast.error(error.response?.data?.message || "Something went wrong! Try again later.");
        }
        throw error;
    }
});

export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
    try {
        const res = axiosInstance.delete(`/courses/${id}`);
        toast.promise(res, {
            loading: "Deleting course, please wait...",
            success: (data) => {
                return data?.data?.message || "Course deleted successfully";
            },
            error: "Failed !"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong! Try again later.");
        throw error;
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
