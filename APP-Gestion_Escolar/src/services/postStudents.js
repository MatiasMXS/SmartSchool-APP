import axios from "axios";
import { baseURL } from "../App";

export const postsStudents = async (studentsForm) => {
  const response = await axios.post(
    `${baseURL}`,

    {
      nombre: studentsForm.nombre,
      apellido: studentsForm.apellido,
      email: studentsForm.email,
      cursos: studentsForm.cursos,
      myFile: studentsForm.myFile,
    }
  );
  return response;
};
