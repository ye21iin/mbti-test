import { testApi } from "./configInstance";

export const getTestResults = () =>
  testApi
    .get()
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const createTestResult = (resultData) =>
  testApi
    .post(resultData)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const deleteTestResult = (id) =>
  testApi.delete(`/${id}`).catch((error) => console.error(error));

export const updateTestResultVisibility = ({ id, visibility }) =>
  testApi
    .patch(`/${id}`, { visibility })
    .catch((error) => console.error(error));
