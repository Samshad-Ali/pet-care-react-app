import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_BASE_URL;

export const commonApi = async (parameter) => {
  try {
    const response = await axios.get(`${url}/${parameter}`);
    return response?.data;
  } catch (error) {
    return error.message;
  }
};
