import estudainteDefaul from "./assets/estudianteDefaul.png";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const url = "https://integrador-api-gestion-escolar.vercel.app/api/estudiantes";
export const FormEstudiante = () => {
  const [postImage, setPostImage] = useState({ myFile: "" });

  const createPost = async (newImage) => {
    const payload = {
      nombre: "Matias",
      apellido: "Moreno",
      email: "pedro.perez@moreno.com",
      cursos: ["Ciencias"],
      myFile: newImage, // Agrega la imagen al objeto
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Datos enviados correctamente:", response.data);
    } catch (error) {
      console.error(
        "Error al enviar los datos:",
        error.response?.data || error.message
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrige la llamada a preventDefault
    createPost(postImage.myFile); // Asegúrate de enviar solo la imagen en base64
    console.log("Formulario enviado");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No se seleccionó ningún archivo.");
      return;
    }
    try {
      const base64 = await convertirABases64(file);
      setPostImage({ ...postImage, myFile: base64 });
    } catch (error) {
      console.error("Error al convertir el archivo:", error);
    }
  };

  return (
    <div className="APP">
      <h1>React APP</h1>
      <label htmlFor="file-upload">
        <img src={postImage.myFile || estudainteDefaul} alt="" />
      </label>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <h3>Pedro Picapiedra</h3>
        <span>Diseñador</span>
        <button type="submit">Cargar</button>
      </form>
    </div>
  );
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
/*const [postImage, setPostImage] = useState({ myFile: "" });

const createPost = async (newImage) => {
  const payload = {
    nombre: "Matias",
    apellido: "Moreno",
    email: "pedro.perez@moreno.com",
    cursos: ["Ciencias"],
    myFile: newImage, // Agrega la imagen al objeto
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Datos enviados correctamente:", response.data);
  } catch (error) {
    console.error("Error al enviar los datos:", error.response?.data || error.message);
  }
};

const handleSubmit = (e) => {
  e.preventDefault(); // Corrige la llamada a preventDefault
  createPost(postImage.myFile); // Asegúrate de enviar solo la imagen en base64
  console.log("Formulario enviado");
};

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) {
    console.error("No se seleccionó ningún archivo.");
    return;
  }
  try {
    const base64 = await convertirABases64(file);
    setPostImage({ ...postImage, myFile: base64 });
  } catch (error) {
    console.error("Error al convertir el archivo:", error);
  }
};

return (
  <div className="APP">
    <h1>React APP</h1>
    <label htmlFor="file-upload">
      <img src={postImage.myFile || estudainteDefaul} alt="" />
    </label>
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        label="Image"
        name="myFile"
        id="file-upload"
        accept=".jpeg, .png, .jpg"
        onChange={(e) => handleFileUpload(e)}
      />
      <h3>Pedro Picapiedra</h3>
      <span>Diseñador</span>
      <button type="submit">Cargar</button>
    </form>
  </div>
);
}

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
});*/
