import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server_url } from "../../server_url";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: server_url,
  }),
  tagTypes: ["User", "Job", "JobDetails"],
  endpoints: (builder) => ({}),
});
console.log(server_url);
export default apiSlice;
