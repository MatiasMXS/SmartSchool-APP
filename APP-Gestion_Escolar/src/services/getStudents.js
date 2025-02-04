import axios from "axios";
import { baseURL, estudiantesURL } from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudents = createAsyncThunk(
  "Students/getStudents",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}${estudiantesURL}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
