import apiSlice from "../api/apiSlice";

const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: ({ token, data }) => ({
        url: "/blog",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),
    editBlog: builder.mutation({
      query: ({ token, id, data }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Blog", "Blogs"],
    }),
    getAllBlogs: builder.query({
      query: (searchTerm) => ({
        // { sort, page, limit, filter }
        // url: `/jobs?sort=${sort}&page=${page}&limit=${limit}&jobTitle=${filter?.jobTitle}&jobType=${filter?.jobType}&experience=${filter?.experience}`,
        url: `/blog?searchTerm=${searchTerm}`,
      }),
      providesTags: ["Blogs"],
    }),
    // getAllJobs: builder.query({
    //   query: () => ({
    //     url: `/all-jobs`,
    //   }),
    //   providesTags: ['Job'],
    // }),

    // getEmployeeJobs: builder.query({
    //   query: (token) => ({
    //     url: '/employee/jobs',
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //   }),
    //   providesTags: ['Job'],
    // }),

    singleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
      }),
      providesTags: ["Blog"],
    }),
    getMyBlogs: builder.query({
      query: (id) => ({
        url: `/blog/get/${id}`,
      }),
      providesTags: ["Blogs"],
    }),

    deleteBlog: builder.mutation({
      query: ({ id, token }) => ({
        url: `/blog/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Blog", "Blogs"],
    }),

    // applyJob: builder.mutation({
    //   query: ({ token, id }) => ({
    //     url: `/job/apply/${id}`,
    //     method: 'PATCH',
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //   }),
    //   invalidatesTags: ['Job', 'User', 'JobDetails'],
    // }),
    // commentOnJob: builder.mutation({
    //   query: ({ id, data, token }) => ({
    //     url: `/job/comment/${id}`,
    //     method: 'PATCH',
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //     body: data
    //   }),
    //   invalidatesTags: ['Job', 'User', 'JobDetails'],
    // }),
    // answerOnJob: builder.mutation({
    //   query: ({ id, data, token }) => ({
    //     url: `/job/comment/${id}`,
    //     method: 'POST',
    //     // headers: {
    //     //   authorization: `Bearer ${token}`,
    //     // },
    //     body: data
    //   }),
    //   invalidatesTags: ['Job', 'User', 'JobDetails'],
    // }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useSingleBlogQuery,
  useGetMyBlogsQuery,
  useEditBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
