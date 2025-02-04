import axios from "axios";
import { baseURL, nombreURL, estudiantesURL } from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudentsName = createAsyncThunk(
  "studentsName/getStudentsName",
  async (payload, thunkAPI) => {
    try {
      const { name } = payload;
      const url = `${baseURL}${estudiantesURL}${nombreURL}/${name}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
