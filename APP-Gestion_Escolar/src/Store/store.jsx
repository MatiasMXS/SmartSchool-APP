import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./slices/StudentSlices/StudentSlices";



const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export default store;