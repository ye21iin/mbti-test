import axios from "axios";

const JSON_TEST_RESULT_URL = `${
  import.meta.env.VITE_JSON_BASE_URL
}/testResults`;

export const getTestResults = () =>
  axios
    .get(JSON_TEST_RESULT_URL)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const createTestResult = (resultData) =>
  axios
    .post(JSON_TEST_RESULT_URL, resultData)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const deleteTestResult = (id) =>
  axios
    .delete(`JSON_TEST_RESULT_URL/${id}`)
    .catch((error) => console.error(error));

export const updateTestResultVisibility = (id, visibility) =>
  axios
    .patch(`JSON_TEST_RESULT_URL/${id}`, { visibility })
    .catch((error) => console.error(error));
