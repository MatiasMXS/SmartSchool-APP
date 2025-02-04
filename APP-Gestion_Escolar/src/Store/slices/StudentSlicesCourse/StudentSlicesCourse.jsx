import { createSlice } from "@reduxjs/toolkit";
import { getStudentsCourse } from "../../../services/getStudentsCourse";

const studentsCourseSlices = createSlice({
  name: "studentsCourseSlices",
  initialState: {
    studentsCourse: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStudentsCourse.fulfilled, (state, action) => {
        state.studentsCourse = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudentsCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default studentsCourseSlices.reducer;
