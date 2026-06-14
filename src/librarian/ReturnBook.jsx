import { useState } from "react";
import { API } from "../services/api";

function ReturnBook() {
  const [issueId, setIssueId] = useState("");

  const returnBook = async () => {
    await API.put(`/issues/return/${issueId}`);
    alert("Book Returned");
  };

  return (
    <div>
      <h2>Return Book</h2>

      <input
        placeholder="Issue ID"
        onChange={(e) => setIssueId(e.target.value)}
      />

      <button onClick={returnBook}>Return</button>
    </div>
  );
}

export default ReturnBook;