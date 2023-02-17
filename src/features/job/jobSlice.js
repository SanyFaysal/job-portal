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
    },
});

export const { setJob } = jobSlice.actions;
export default jobSlice.reducer;
