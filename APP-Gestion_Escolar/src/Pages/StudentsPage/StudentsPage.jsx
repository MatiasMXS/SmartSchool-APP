import { Box, LinearProgress, Typography } from "@mui/material";
import { Location } from "../../components/Location/Location";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudents } from "../../services/getStudents";
import StudentsToolBar from "../../components/StudentsToolBar.jsx/StudentsToolBar";
import { StudentsList } from "../../components/StudetsList/StudentsList";

export const StudentsPage = () => {
  const dispatch = useDispatch();
  const { students, isLoading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  return (
    <Box>
      <Location />
      <StudentsToolBar sx={{ marginBottom: 0 }} />
      <StudentsList students={students} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default StudentsPage;
