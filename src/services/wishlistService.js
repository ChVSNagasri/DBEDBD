import axios from "axios";

const API = "http://localhost:9090/api";

export const addToWishlist = (data) => {
  return axios.post(`${API}/wishlist`, data);
};

export const getWishlist = (studentId) => {
  return axios.get(`${API}/wishlist/student/${studentId}`);
};

export const removeFromWishlist = (id) => {
  return axios.delete(`${API}/wishlist/${id}`);
};