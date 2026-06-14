import { useState } from "react";
import { API } from "../services/api";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [studentName, setStudentName] = useState("");

  const issueBook = async () => {
    await API.post("/issues/issue", {
      bookId,
      studentName
    });

    alert("Book Issued");
  };

  return (
    <div>
      <h2>Issue Book</h2>

      <input
        placeholder="Book ID"
        onChange={(e) => setBookId(e.target.value)}
      />

      <input
        placeholder="Student Name"
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={issueBook}>Issue</button>
    </div>
  );
}

export default IssueBook;