import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
    headers: {
      key: import.meta.env.VITE_APP_API_KEY,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllStudent: builder.query({
      query: () => "/students",
      providesTags: ["students"],
    }),
    createStudent: builder.mutation({
      query: (newStudent) => ({
        url: "/students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["students"],
    }),
    deleteStudent: builder.mutation({
      query: (sId) => ({
        url: `/students/${sId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["students"],
    }),
    // updateStudent:builder.query({})
  }),
});

export const {
  useGetAllStudentQuery,
  useCreateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
