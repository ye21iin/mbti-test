import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_BASE_URL;

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const EXP_TM = "5m";
export const login = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login?expiresIn=${EXP_TM}`,
    userData
  );
  return response.data;
};

export const getUserProfile = async (token, id) => {
  const response = await axios.get(`${API_URL}/user?user_id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (token, formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
