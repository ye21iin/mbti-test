import axios from "axios";

const JSON_USERS_URL = import.meta.env.VITE_JSON_BASE_URL;

export const addUserToJsonServer = async (userData) => {
  try {
    const response = await axios.post(`${JSON_USERS_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
