import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const studentId = "1"; // MUST MATCH DB

        const res = await axios.get(
          `http://localhost:5000/api/notifications/${studentId}`
        );

        setNotifications(res.data);
      } catch (err) {
        console.log(err);

        setNotifications([
          { message: "⚠️ Backend not connected" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔔 Notifications</h2>

      {loading ? (
        <p>Loading...</p>
      ) : notifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        notifications.map((n, i) => (
          <div
            key={i}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          >
            <p>{n.message}</p>

            {n.createdAt && (
              <small>
                🕒 {new Date(n.createdAt).toLocaleString()}
              </small>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;