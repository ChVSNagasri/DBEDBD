import { useEffect, useState } from "react";
import { getNotifications } from "../services/notification";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      // Replace 1 with actual logged-in student id later
      const res = await getNotifications(1);
      setNotifications(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Notifications</h3>

      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        notifications.map((n) => (
          <div
            key={n.id}
            className="alert alert-info mb-2"
          >
            {n.message}
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;