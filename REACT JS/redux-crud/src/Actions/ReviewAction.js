import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllReviews = createAsyncThunk("reviews/all", async () => {
    console.log(`get all reviews`)
})

export const createReviews = createAsyncThunk("reviews/add", async () => {
    console.log(`get new reviews`)
})

export const updateReviews = createAsyncThunk("reviews/update", async () => {
    console.log(`update reviews`)
})

export const deleteReviews = createAsyncThunk("reviews/delete", async () => {
    console.log(`delete reviews`)
})
