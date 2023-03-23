import axios from "axios";

export const getMethod = async (item) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + item.url + process.env.REACT_APP_API_KEY);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};
