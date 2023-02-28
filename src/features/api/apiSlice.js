import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_DEV_URL,
    baseUrl: 'https://job-portal-server-b7p7.onrender.com/api/v1',
  }),
  tagTypes: ['User', 'Job', 'JobDetails'],
  endpoints: (builder) => ({}),
});

export default apiSlice;
