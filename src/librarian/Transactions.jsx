import { useEffect, useState } from "react";
import axios from "axios";

function LibrarianTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/issues")
      .then(res => setTransactions(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>💰 Transactions</h2>

      {transactions.map((t, index) => (
        <div key={index} className="card">
          <p>📚 {t.bookTitle}</p>
          <p>👨‍🎓 {t.studentName}</p>
          <p>📅 {t.issueDate}</p>
          <p>🔁 {t.status}</p>
        </div>
      ))}
    </div>
  );
}

export default LibrarianTransactions;