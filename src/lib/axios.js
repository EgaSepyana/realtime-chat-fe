import axios from "axios";

export const axiosIntences = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
