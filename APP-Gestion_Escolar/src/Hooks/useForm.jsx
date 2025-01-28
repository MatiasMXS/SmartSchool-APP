import { useState } from "react";
import { postsStudents } from "../services/postStudents";

export const useForm = () => {
  const [studentsForm, setStudentsForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cursos: "",
    myFile: "",
  });

  const handleChange = (e) => {
    setStudentsForm({ ...studentsForm, [e.target.name]: e.target.value });
  };

  const handleFileUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No se seleccionó ningún archivo.");
      return;
    }
    try {
      const base64 = await convertirABases64(file);
      setStudentsForm({ ...studentsForm, myFile: base64 });
    } catch (error) {
      console.error("Error al convertir el archivo:", error);
    }
  };

  const handleSubmit = async () => {
    const sendData = await postsStudents(studentsForm);

    handleClean();
  };

  const handleClean = async () => {
    setStudentsForm({
      nombre: "",
      apellido: "",
      email: "",
      cursos: "",
      myFile: "",
    });
  };

  function convertirABases64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result); // Devuelve la imagen en base64
      };

      fileReader.onerror = (error) => {
        reject(error); // Rechaza la promesa con el error
      };
    });
  }

  return {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleSubmit,
    handleClean,
  };
};
