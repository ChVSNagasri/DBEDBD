import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../components/Dashboard";

function LibrarianDashboard() {
  const [students, setStudents] = useState(0);
  const [overdue, setOverdue] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const studentRes = await axios.get(
        "http://localhost:5000/api/dashboard/students-count"
      );

      const overdueRes = await axios.get(
        "http://localhost:5000/api/dashboard/overdue-books"
      );

      setStudents(studentRes.data.count);
      setOverdue(overdueRes.data.count);
    } catch (err) {
      console.error("Dashboard error:", err);
    }
  };

  return (
    <>
      <h1>📊 Librarian Dashboard</h1>

      <div className="card-grid">
        <DashboardCard
          title="Overdue Books"
          value={overdue}
          icon="⚠️"
        />

        <DashboardCard
          title="Students"
          value={students}
          icon="👨‍🎓"
        />
      </div>
    </>
  );
}

export default LibrarianDashboard;