import { useEffect, useState } from "react";
import StudentLayout from "../layouts/StudentLayout";
import { getBorrowedBooks } from "../services/borrowService";

function BorrowedBooks() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const studentId = localStorage.getItem("studentId") || 1;
    fetchBorrowedBooks(studentId);
  }, []);

  const fetchBorrowedBooks = async (studentId) => {
    try {
      const res = await getBorrowedBooks(studentId);
      console.log(res.data);
      setBorrowedBooks(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <StudentLayout>
      <h1>Borrowed Books</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {borrowedBooks.length === 0 ? (
            <tr>
              <td colSpan="4">No borrowed books</td>
            </tr>
          ) : (
            borrowedBooks.map((b, index) => (
              <tr key={index}>
                <td>{b.book?.title}</td>
                <td>{b.issueDate}</td>
                <td>{b.dueDate}</td>
                <td>{b.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </StudentLayout>
  );
}

export default BorrowedBooks;