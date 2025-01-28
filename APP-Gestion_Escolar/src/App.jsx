
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
 import AppBarMenu from "./Components/AppBarMenu/AppBarMenu";
import {Dashboard} from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/Login/LoginPage";
import { AddStudentPage } from "./Pages/AddStudentPage/AddStudentPage";

 
  export const baseURL = import.meta.env.VITE_BASE_URL;
  export const estudaintesURL = import.meta.env.VITE_STUDENTS;

  
  
  
  function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />} />,
            <Route element={<AppBarMenu />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddStudentPage />} />
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

