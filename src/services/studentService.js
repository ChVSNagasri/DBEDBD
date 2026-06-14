import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getStudents = () => {
  return axios.get(`${API_BASE}/users/students`);
};