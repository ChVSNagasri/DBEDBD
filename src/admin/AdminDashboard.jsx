import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/Dashboard";

import { getUsers } from "../services/userService";
import { getBooks } from "../services/bookService";
import { getFines } from "../services/fineService";

function AdminDashboard() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [students, setStudents] = useState(0);
  const [librarians, setLibrarians] = useState(0);
  const [admins, setAdmins] = useState(0);
  const [pendingFines, setPendingFines] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const getRole = (user) => {
    // CASE 1: role is string
    if (typeof user.role === "string") {
      return user.role.toLowerCase().replace("role_", "").trim();
    }

    // CASE 2: roles array
    if (user.roles && user.roles.length > 0) {
      return user.roles[0].name.toLowerCase();
    }

    return "";
  };

  const loadDashboard = async () => {
    try {
      const booksRes = await getBooks();
      setTotalBooks(booksRes.data.length);

      const usersRes = await getUsers();
      const users = usersRes.data;

      console.log("USERS FROM API:", users); // 👈 DEBUG

      setStudents(
        users.filter(u => getRole(u) === "student").length
      );

      setLibrarians(
        users.filter(u => getRole(u) === "librarian").length
      );

      setAdmins(
        users.filter(u => getRole(u) === "admin").length
      );

      const finesRes = await getFines();

      const pending = finesRes.data
        .filter(f => f.status !== "PAID")
        .reduce((sum, f) => sum + (f.amount || 0), 0);

      setPendingFines(pending);

    } catch (error) {
      console.error("Admin dashboard error:", error);
    }
  };

  return (
    <AdminLayout>
      <h1>📊 Admin Dashboard</h1>

      <div className="card-grid">
        <DashboardCard title="Total Books" value={totalBooks} icon="📚" />
        <DashboardCard title="Students" value={students} icon="👨‍🎓" />
        <DashboardCard title="Librarians" value={librarians} icon="👨‍💼" />
        <DashboardCard title="Admins" value={admins} icon="🛡️" />
      
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;