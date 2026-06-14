import { useEffect, useState } from "react";
import StudentLayout from "../layouts/StudentLayout";
import {
  getWishlist,
  removeFromWishlist
} from "../services/wishlistService";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const studentId = localStorage.getItem("studentId") || 1;

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await getWishlist(studentId);
      setWishlist(res.data);
    } catch (err) {
      console.log("Error loading wishlist:", err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromWishlist(id);
      fetchWishlist();
    } catch (err) {
      console.log("Remove failed:", err);
    }
  };

  return (
    <StudentLayout>
      <h1>Wishlist</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {wishlist.length === 0 ? (
            <tr>
              <td colSpan="2">No books in wishlist</td>
            </tr>
          ) : (
            wishlist.map((w) => (
              <tr key={w.id}>
                <td>{w.bookTitle}</td>

                <td>
                  <button onClick={() => handleRemove(w.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </StudentLayout>
  );
}

export default Wishlist;