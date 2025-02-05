import { Box } from "@mui/material";
import { StudentFormComponent } from "../../ComponentTemp/StudentFormComponent/StudentFormComponent";
import { useForm } from "../../Hooks/useForm";

export const AddStudentPage = () => {
  const {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleCursosChange,
    handleSubmitNew,
    handleClean,
  } = useForm();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "100%",
      }}
    >
      <StudentFormComponent
        studentsForm={studentsForm}
        handleChange={handleChange}
        handleCursosChange={handleCursosChange}
        handleSubmit={handleSubmitNew}
        handleFileUploadImage={handleFileUploadImage}
        handlerButton={handleClean}
        title={"Nueva Estudiante"}
        textButton1={"Agregar"}
        textButton2={"Limpiar"}
      />
    </Box>
  );
};
