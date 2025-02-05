import { Avatar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentsCourse } from "../../services/getStudentsCourse";
import { CoursesMockup } from "../../utils/CoursesMockup";

export const CourseSelector = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(getStudentsCourse({ course: newValue }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        width: "69%",
        margin: "0 auto",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        mt: 4,
        border: "2px solid #ddd",
      }}
    >
      <Toolbar sx={{ backgroundColor: "#fff", width: "100%" }}>
        <Tabs
          value={value}
          onChange={(event, newValue) => handleChange(event, newValue)}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          sx={{ width: "100%" }}
          variant="fullWidth"
        >
          {CoursesMockup.map((course) => (
            <Tab
              key={course.id}
              value={course.id}
              icon={
                <Avatar sx={{ bgcolor: "primary.main", width: 35, height: 35 }}>
                  {course.icon}
                </Avatar>
              }
              label={course.id}
              sx={{
                color: value === course.id ? "primary.main" : "black",
                flexDirection: "column", // Hace que el ícono esté arriba del texto
                alignItems: "center",
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </Box>
  );
};
