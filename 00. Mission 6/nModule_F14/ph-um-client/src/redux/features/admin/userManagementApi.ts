import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (body) => {
        return {
          url: "/users/create-student",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useAddStudentMutation } = userManagementApi;
