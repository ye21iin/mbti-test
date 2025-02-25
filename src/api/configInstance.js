import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_BASE_URL;
const JSON_TEST_RESULT_URL = `${import.meta.env.VITE_JSON_BASE_URL}`;

export const authApi = axios.create({
  baseURL: API_URL,
});

export const testApi = axios.create({
  baseURL: JSON_TEST_RESULT_URL,
});
