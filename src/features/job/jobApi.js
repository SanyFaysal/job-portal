import apiSlice from '../api/apiSlice';

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: ({ token, data }) => ({
        url: '/jobs',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['Jobs'],
    }),
    updateJob: builder.mutation({
      query: ({ token, id, data }) => ({
        url: `/job/${id}`,
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['Jobs'],
    }),
    getJobs: builder.query({
      query: () => ({
        url: '/jobs',
      }),
      providesTags: ['Jobs'],
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
  }),
});

export const { useCreateJobMutation, useGetJobsQuery, useJobByIdQuery, useUpdateJobMutation } = jobApi;
