import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me",
  headers: {
    "Content-Type": "application/json",
    timeout: 50000,
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 400 || statusCode === 404 || statusCode === 403) {
      throw error;
    } else if (statusCode === 401) {
      throw error;
    } else if (statusCode === 500) {
      throw error;
    } else {
      throw new Error("Something went wrong - server error");
    }
  }
);

export { API };
