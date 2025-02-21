import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_BASE_URL;

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const EXP_TM = "5m";
export const login = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/login?expiresIn=${EXP_TM}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserProfile = async (token, id) => {
  try {
    const url = id ? `${API_URL}/user?user_id=${id}` : `${API_URL}/user`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProfile = async (token, formData) => {
  try {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
