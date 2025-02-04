import axios from "axios";
import { baseURL, estudiantesURL } from "../App";

export const putStudents = async (studentsForm, idRow) => {
  const url = `${baseURL}${estudiantesURL}/${idRow}`;

  try {
    const response = await axios.put(url, {
      nombre: studentsForm.nombre,
      apellido: studentsForm.apellido,
      email: studentsForm.email,
      cursos: studentsForm.cursos,
      myFile: studentsForm.myFile,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error al realizar el PUT:",
      error.response?.data || error.message
    );
    throw error;
  }
};
