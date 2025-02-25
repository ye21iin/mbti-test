import { testApi } from "./configInstance";

export const getTestResults = () =>
  testApi
    .get("/testResults")
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const createTestResult = (resultData) =>
  testApi
    .post("/testResults", resultData)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const deleteTestResult = (id) =>
  testApi.delete(`/testResults/${id}`).catch((error) => console.error(error));

export const updateTestResultVisibility = ({ id, visibility }) =>
  testApi
    .patch(`/testResults/${id}`, { visibility })
    .catch((error) => console.error(error));
