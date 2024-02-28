import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        // console.log("inside redux", response);

        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    // Create academic semester
    createAcademicSemester: builder.mutation({
      query: (body) => {
        // console.log("create A S data", body);

        return {
          url: "/academic-semesters/create-academic-semester",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useCreateAcademicSemesterMutation, useGetAllSemestersQuery } = academicManagementApi;
