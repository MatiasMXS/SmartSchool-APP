import { createSlice } from "@reduxjs/toolkit";
import { getStudents } from "../../../services/getStudents";

const studentSlices = createSlice({
  name: "studentSlices",
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
      });
  },
});

export default studentSlices.reducer;