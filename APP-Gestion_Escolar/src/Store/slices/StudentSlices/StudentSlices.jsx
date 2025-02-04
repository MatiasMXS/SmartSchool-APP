import { createSlice } from "@reduxjs/toolkit";
import { getStudents } from "../../../services/getStudents";
import { getStudentsName } from "../../../services/getStudentsName";

const studentsSlices = createSlice({
  name: "studentsSlices",
  initialState: {
    students: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getStudentsName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStudentsName.fulfilled, (state, action) => {
        state.students = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudentsName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default studentsSlices.reducer;
