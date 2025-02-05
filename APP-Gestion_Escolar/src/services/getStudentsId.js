import { baseURL, estudiantesURL } from "../App";
import axios from "axios";

export const getStudentsId = async (id) => {
  try {
    const url = `${baseURL}${estudiantesURL}/${id}`;
    const respose = await axios.get(url);
    return respose.data;
  } catch (error) {
    console.error(error);
  }
};

export default getStudentsId;
