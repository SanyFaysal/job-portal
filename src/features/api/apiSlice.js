import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_DEV_URL,
    baseUrl: 'http://localhost:5000/api/v1',
  }),
  tagTypes: ['User', 'Job', 'JobDetails'],
  endpoints: (builder) => ({}),
});

export default apiSlice;
