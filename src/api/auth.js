import { authApi } from "./configInstance";

export const register = (userData) =>
  authApi
    .post(`/register`, userData)
    .then((res) => res.data)
    .catch(console.error);

const EXP_TM = "45m";
export const login = (userData) =>
  authApi
    .post(`/login?expiresIn=${EXP_TM}`, userData)
    .then((res) => res.data)
    .catch(console.error);

export const getUserProfile = (token, id) =>
  authApi
    .get(id ? `/user?user_id=${id}` : `/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch(console.error);

export const updateProfile = (token, formData) =>
  authApi
    .patch(`/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch(console.error);
