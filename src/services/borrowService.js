import axios from "axios";

const API = "http://localhost:9090/api";

export const getBooks = () => axios.get(`${API}/books`);

export const borrowBook = (bookId, studentId) => {
  return axios.post(`${API}/borrow`, {
    book: { id: bookId },
    studentId
  });
};

export const getBorrowedBooks = (studentId) => {
  return axios.get(`${API}/borrow/student/${studentId}`);
};