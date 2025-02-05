import { Box } from "@mui/material";

import { useSelector } from "react-redux";

import { CourseSelector } from "../../ComponentTemp/cursoSelector/CourseSelctor";
import { StudentsList } from "../../ComponentTemp/StudetsList/StudentsList";

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
