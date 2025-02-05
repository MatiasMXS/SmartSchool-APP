import { Box } from "@mui/material";
import { Location } from "../../components/Location/Location";
import { StudentsList } from "../../components/StudetsList/StudentsList";
import { useSelector } from "react-redux";

import { CourseSelector } from "../../components/cursoSelector/CourseSelctor";

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
