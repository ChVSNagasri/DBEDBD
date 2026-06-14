import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090",
});

export const addUser = (data) => {
  return API.post("/api/users", data);
};

export const getUsers = () => {
  return API.get("/api/users");
};