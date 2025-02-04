import { deleteStudent } from "../services/deleteStudent";
import { useDispatch } from "react-redux";
//import { setStudents } from "../store/slices/StudentSlices/StudentSlices";
//import { baseURL, estudiantesURL } from "../App";
import { getStudents } from "../services/getStudents";

export const useDeleteStudent = () => {
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    const sendData = await deleteStudent(e._id);
    //const response = await getStudents(`${baseURL}${estudiantesURL}`);
    dispatch(getStudents());
  };

  return {
    handleDelete,
  };
};
