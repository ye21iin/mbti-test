import axios from "axios";

const JSON_TEST_RESULT_URL = `${
  import.meta.env.VITE_JSON_BASE_URL
}/testResults`;

const testApi = axios.create({
  baseURL: JSON_TEST_RESULT_URL,
});

export const getTestResults = () =>
  testApi
    .get(JSON_TEST_RESULT_URL)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const createTestResult = (resultData) =>
  testApi
    .post(JSON_TEST_RESULT_URL, resultData)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const deleteTestResult = (id) =>
  testApi
    .delete(`${JSON_TEST_RESULT_URL}/${id}`)
    .catch((error) => console.error(error));

export const updateTestResultVisibility = (id, visibility) =>
  testApi
    .patch(`${JSON_TEST_RESULT_URL}/${id}`, visibility)
    .catch((error) => console.error(error));
