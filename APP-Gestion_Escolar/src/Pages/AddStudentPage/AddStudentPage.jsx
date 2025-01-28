import { Box} from "@mui/material";
import { StudentFormComponent } from "../../Components/StudentFormComponent/StudentFormComponent";
//import { useForm } from "../../hooks/useForm";


export const AddStudentPage = () => {
 
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
        
        title={"Nueva Tarea"}
        textButton1={"Agregar"}
        textButton2={"Limpiar"}
      />
    </Box>
  );
};