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
      invalidatesTags: ['Job'],
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
      invalidatesTags: ['Job', 'JobDetails'],
    }),
    getJobs: builder.query({
      query: () => ({
        url: '/jobs',
      }),
      providesTags: ['Job'],
    }),
    getEmployeeJobs: builder.query({
      query: (token) => ({
        url: '/employee/jobs',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Job'],
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ['Job', 'JobDetails'],
    }),

    deleteJob: builder.mutation({
      query: ({ id, employeeId, token }) => ({
        url: `/job/${id}`,
        method: 'DELETE',
        body: { employeeId },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Job', 'JobDetails'],
    }),

    applyJob: builder.mutation({
      query: ({ token, id }) => ({
        url: `/job/apply/${id}`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Job', 'User'],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetJobsQuery,
  useJobByIdQuery,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useGetEmployeeJobsQuery,
  useApplyJobMutation,
} = jobApi;
