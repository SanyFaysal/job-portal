import apiSlice from '../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/user/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    getMe: builder.query({
      query: (token) => ({
        url: '/user/me',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['User'],
    }),
    // jobById: builder.query({
    //   query: (id) => ({
    //     url: `/job/${id}`,
    //   }),
    // }),
  }),
});

export const { useSignupMutation, useGetMeQuery } = authApi;
