import { useEffect, useState } from "react";
import StudentLayout from "../layouts/StudentLayout";
import DashboardCard from "../components/Dashboard";

import { getBorrowedBooks } from "../services/borrowService";
import { getFines } from "../services/fineService";
import { getWishlist } from "../services/wishlistService";

function StudentDashboard() {
  const [borrowedCount, setBorrowedCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [fineAmount, setFineAmount] = useState(0);

  const studentId = 1; // TODO: replace with logged-in student id

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      // 📚 Borrowed books
      const borrowedRes = await getBorrowedBooks(studentId);
      setBorrowedCount(borrowedRes.data.length);

      // ❤️ Wishlist books
      const wishlistRes = await getWishlist(studentId);
      setWishlistCount(wishlistRes.data.length);

      // 💰 Fines
      const fineRes = await getFines();

      const studentFines = fineRes.data.filter(
        (fine) => fine.student?.id === studentId
      );

      const totalFine = studentFines.reduce(
        (sum, fine) => sum + (fine.amount || 0),
        0
      );

      setFineAmount(totalFine);
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  return (
    <StudentLayout>
      <h1>🎓 Student Dashboard</h1>

      <div className="card-grid">
        <DashboardCard
          title="Borrowed Books"
          value={borrowedCount}
          icon="📚"
        />

        <DashboardCard
          title="Wishlist"
          value={wishlistCount}
          icon="❤️"
        />

       
      </div>
    </StudentLayout>
  );
}

export default StudentDashboard;