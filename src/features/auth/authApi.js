import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    userRegister: builder.mutation({
      query: ({ id, user }) => ({
        url: `/user/register/${id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    addProject: builder.mutation({
      query: ({ id, data, token }) => ({
        url: `/user/candidate/add-project/${id}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    editProject: builder.mutation({
      query: ({ projectId, data, token }) => ({
        url: `/user/candidate/edit-project/${projectId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getMe: builder.query({
      query: (token) => ({
        url: `/user/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
    getApplicant: builder.query({
      query: (id) => ({
        url: `/user/candidate/${id}`,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useAddProjectMutation,
  useLoginMutation,
  useUserRegisterMutation,
  useGetMeQuery,
  useGetApplicantQuery,
  useEditProjectMutation,
} = authApi;
