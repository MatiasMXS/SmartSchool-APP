import axios from "axios";
import { baseURL, estudaintesURL} from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getStudents = createAsyncThunk (
  "Students/getStudents",
  async ( thunkAPI) => {
    
    try {
      const response = await axios.get(`${baseURL}${estudaintesURL}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

