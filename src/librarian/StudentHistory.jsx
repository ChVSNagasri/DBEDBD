import { useState } from "react";
import axios from "axios";

function StudentHistory() {
  const [studentId, setStudentId] = useState("");
  const [borrowData, setBorrowData] = useState([]);

  const searchBorrow = () => {
    if (!studentId) return;

    axios
      .get(`http://localhost:5000/api/borrow/student/${studentId}`)
      .then((res) => {
        setBorrowData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setBorrowData([]);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Student Borrow Search</h2>

      <input
        type="number"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <button onClick={searchBorrow} style={{ marginLeft: "10px" }}>
        🔍 Search
      </button>

      <hr />

      {borrowData.length === 0 ? (
        <p>No borrow records found</p>
      ) : (
        borrowData.map((item) => (
          <div key={item.id} className="card">
            <p>📚 Book: {item.bookTitle}</p>
            <p>📅 Borrowed: {item.borrowDate}</p>
            <p>
              📅 Returned: {item.returnDate || "Not returned"}
            </p>
            <p>Status: {item.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentHistory;