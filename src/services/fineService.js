import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090",
});

export const getFines = () => API.get("/api/fines");
export const addFine = (data) => API.post("/api/fines", data);