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
      query: ({ id, user }) => ({
        url: `/user/register/${id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),

    getMe: builder.query({
      query: (token) => ({
        url: `/user/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['User']
    }),

  }),
});

export const { useSignupMutation, useLoginMutation, useUserRegisterMutation, useGetMeQuery } = authApi;
