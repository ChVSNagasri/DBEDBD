import axios from "axios";

const API = "http://localhost:9090/api";

export const getNotifications = (studentId) => {
  return axios.get(`${API}/notifications/student/${studentId}`);
};