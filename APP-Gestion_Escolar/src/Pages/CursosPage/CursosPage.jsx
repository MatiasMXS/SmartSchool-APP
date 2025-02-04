import { Box } from "@mui/material";
import { Location } from "../../Components/Location/Location";
import { StudentsList } from "../../Components/StudetsList/StudentsList";
import {useSelector } from "react-redux";


import { CourseSelector } from "../../Components/cursoSelector/CourseSelctor";


export const CursosPage = () => {
  const { studentsCourse, isLoading, error } = useSelector(
    (state) => state.studentsCourse
  );
  

  return (
    <Box>
      <Location />
      <CourseSelector />
      <StudentsList
        students={studentsCourse}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};
