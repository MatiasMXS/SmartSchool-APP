import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppBarMenu from "./Components/AppBarMenu/AppBarMenu";
import { StudentsPage } from "./Pages/StudentsPage/StudentsPage";
import LoginPage from "./Pages/Login/LoginPage";
import { AddStudentPage } from "./Pages/AddStudentPage/AddStudentPage";
import { CursosPage } from "./Pages/CursosPage/CursosPage";
import StudentData from "./Pages/StudentData/StudentData";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const estudiantesURL = import.meta.env.VITE_STUDENTS;
export const nombreURL = import.meta.env.VITE_NAME;
export const cursoURL = import.meta.env.VITE_COURSE;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />,
        <Route element={<AppBarMenu />}>
          <Route path="/estudiantes" element={<StudentsPage />} />
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/add" element={<AddStudentPage />} />
          <Route path="/datos-estudiante/:id" element={<StudentData />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
