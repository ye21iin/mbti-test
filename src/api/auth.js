import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_BASE_URL;

const authApi = axios.create({
  baseURL: API_URL,
});

export const register = (userData) =>
  authApi
    .post(`${API_URL}/register`, userData)
    .then((res) => res.data)
    .catch(console.error);

const EXP_TM = "45m";
export const login = (userData) =>
  authApi
    .post(`${API_URL}/login?expiresIn=${EXP_TM}`, userData)
    .then((res) => res.data)
    .catch(console.error);

export const getUserProfile = (token, id) =>
  authApi
    .get(id ? `${API_URL}/user?user_id=${id}` : `${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch(console.error);

export const updateProfile = (token, formData) =>
  authApi
    .patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch(console.error);
