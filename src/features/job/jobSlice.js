import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    job: {},
};


const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJob: (state, action) => {
            state.job = action.payload;
        },
        clearJob: (state, action) => {
            state.job = {};
        },
    },
});

export const { setJob, clearJob } = jobSlice.actions;
export default jobSlice.reducer;
