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
    login: builder.mutation({
      query: (data) => ({
        url: '/user/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    userRegister: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/register/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    // jobById: builder.query({
    //   query: (id) => ({
    //     url: `/job/${id}`,
    //   }),
    // }),
  }),
});

export const { useSignupMutation, useLoginMutation, useUserRegisterMutation } = authApi;
