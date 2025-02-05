import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const useAppBarMenu = () => {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");
  const navigate = useNavigate();
  const [value, setValue] = useState("estudiantes");

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navegar si selecciona el tab de "Estudiantes"
    if (newValue === "estudiantes") {
      navigate("/estudiantes");
    } else if (newValue === "cursos") {
      navigate("/cursos");
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith("/datos-estudiante")) {
      setValue("datos-estudiante");
    } else if (location.pathname === "/estudiantes") {
      setValue("estudiantes");
    }
  }, [location.pathname]);

  return { location, navigate, value, setValue, handleChange };
};
