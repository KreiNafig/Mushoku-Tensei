import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../axios/axios'

export const fetchInfo = createAsyncThunk('musyokuTensei/fetchInfo', async () => {
    const {data} = await axios.get('')
    return data
})

const initialState = {
    data: null,
    status: 'idle',
    error: null
}

const getInfo = createSlice({
    name: 'musyokuTensei',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchInfo.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        })
        .addCase(fetchInfo.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchInfo.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export const musyokuTensei = getInfo.reducer;