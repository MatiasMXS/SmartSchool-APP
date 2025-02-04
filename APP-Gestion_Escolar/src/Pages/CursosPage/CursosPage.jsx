import { Box } from "@mui/material";
import { Location } from "../../Components/Location/Location";
import { StudentsList } from "../../Components/StudetsList/StudentsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { CourseSelector } from "../../Components/cursoSelector/CourseSelctor";
import { getStudentsCourse } from "../../services/getStudentsCourse";

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
