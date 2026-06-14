import { useEffect, useState } from "react";
import axios from "axios";

function OverdueBooks() {
  const [overdues, setOverdues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/issues/overdue")
      .then(res => setOverdues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>⏰ Overdue Books</h2>

      {overdues.length === 0 ? (
        <p>No overdue books 🎉</p>
      ) : (
        overdues.map((item, index) => (
          <div key={index} className="card">
            <p>📚 Book: {item.bookTitle}</p>
            <p>👨‍🎓 Student: {item.studentName}</p>
            <p>📅 Due Date: {item.dueDate}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default OverdueBooks;