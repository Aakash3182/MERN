import { createSlice } from "@reduxjs/toolkit";
import { createReview,getAllReviews,updateReviews,deleteReviews} from '../Actions/ReviewAction'

const reviewSlice = createSlice({
    name: "review",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(createReview.fulfilled,async (state,action) => {})
            .addCase(getAllReview.fulfilled, async (state,action) => {})
            .addCase(updateReview.fulfilled, async (state,action) => {})
            .addCase(deleteReview.fulfilled, async (state,action) => {})
            
    }
})

export default reviewSlice