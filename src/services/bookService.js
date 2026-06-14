import axios from "axios";

const API = "http://localhost:9090/api";

export const getBooks = () => {
  return axios.get(`${API}/books`);
};

export const addBook = (bookData) => {
  return axios.post(`${API}/books`, bookData);
};

export const getBookById = (id) => {
  return axios.get(`${API}/books/${id}`);
};

export const updateBook = (id, bookData) => {
  return axios.put(`${API}/books/${id}`, bookData);
};

export const deleteBook = (id) => {
  return axios.delete(`${API}/books/${id}`);
};