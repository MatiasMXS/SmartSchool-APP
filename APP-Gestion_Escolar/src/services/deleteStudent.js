import axios from "axios";
import { baseURL, estudiantesURL } from "../App";

export const deleteStudent = async (idRow) => {
  const url = `${baseURL}${estudiantesURL}/${idRow}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error(
      "Error al realizar el DELETE:",
      error.response?.data || error.message
    );
    throw error;
  }
};
