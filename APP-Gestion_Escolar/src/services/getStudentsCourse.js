import axios from "axios";
import { baseURL, cursoURL, estudiantesURL } from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudentsCourse = createAsyncThunk(
  "studentsCourse/getStudentsCourse",
  async (payload, thunkAPI) => {
    try {
      const { course } = payload;
      const url = `${baseURL}${estudiantesURL}${cursoURL}/${course}`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
