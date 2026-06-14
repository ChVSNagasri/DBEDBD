import { useEffect, useState } from "react";
import { getBorrowedBooks } from "../services/borrowService";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const studentId = 1;

      const borrowRes = await getBorrowedBooks(studentId);

      console.log("Borrow Data:", borrowRes.data);

      const data = borrowRes.data.map((b) => ({
        id: b.id,
        message: `📚 ${b.book?.title}`,
      }));

      setNotifications(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>🔔 Notifications</h3>

      {notifications.length === 0 ? (
        <div className="alert alert-success">
          🎉 No notifications available
        </div>
      ) : (
        notifications.map((n) => (
          <div key={n.id} className="alert alert-primary mb-2">
            {n.message}
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;