import apiSlice from '../api/apiSlice';

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: '/job',
        method: 'POST',
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

export const { useCreateJobMutation, useGetJobsQuery, useJobByIdQuery } =
  jobApi;
