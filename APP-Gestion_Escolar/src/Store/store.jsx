import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./slices/StudentSlices/StudentSlices";
import studentsCourseReducer from "./slices/StudentSlicesCourse/StudentSlicesCourse";
const store = configureStore({
  reducer: {
    students: studentsReducer,
    studentsCourse: studentsCourseReducer,
  },
});

export default store;
