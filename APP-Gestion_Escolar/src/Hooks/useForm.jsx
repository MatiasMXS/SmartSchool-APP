import { useState } from "react";
import { postsStudents } from "../services/postStudents";
import { useDispatch } from "react-redux";
import { getStudents } from "../services/getStudents";
import { putStudents } from "../services/putStudents";

export const useForm = () => {
  const dispatch = useDispatch();
  const [studentsForm, setStudentsForm] = useState({
    _id:"",
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
    cursos: [],
    myFile: "",
  });

  const handleUpdate = (e) => {
    setStudentsForm({
      _id: e._id,
      nombre: e.nombre,
      apellido: e.apellido,
      edad: e.edad,
      telefono: e.telefono,
      email: e.email,
      cursos: e.cursos,
      myFile: e.myFile,
    });
  };

  const handleChange = (e) => {
    setStudentsForm({ ...studentsForm, [e.target.name]: e.target.value });
  };

  const handleCursosChange = (event) => {
    const { value } = event.target;
    setStudentsForm({
      ...studentsForm,
      cursos: typeof value === "string" ? value.split(",") : value,
    });
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
    e.target.value = ""; // Limpia el input para permitir seleccionar el mismo archivo si es necesario
  } catch (error) {
    console.error("Error al convertir el archivo:", error);
  }
};

  const handleSubmitNew = async () => {
    const { _id, ...dataWithoutId } = studentsForm;
    const sendData = await postsStudents(dataWithoutId);
    handleClean();
  };
  const handleSubmitUpload = async () => {
    const { _id, ...dataWithoutId } = studentsForm;
    const sendData = await putStudents(dataWithoutId, studentsForm._id);
    dispatch(getStudents());
  };

  const handleClean = async () => {
    setStudentsForm({
      nombre: "",
      apellido: "",
      edad: "",
    telefono: "",
      email: "",
      cursos: [],
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
    handleCursosChange,
    handleSubmitNew,
    handleSubmitUpload,
    handleClean,
    handleUpdate,
  };
};
