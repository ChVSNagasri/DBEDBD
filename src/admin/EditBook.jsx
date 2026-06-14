import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { springAPI as API } from "../services/axiosConfig";

function EditBook() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    availableQuantity: "",
    category: null
  });

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data);
    } catch (err) {
      console.log("GET book error:", err);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  const updateBook = async () => {

    const payload = {
      title: book.title,
      author: book.author,
      availableQuantity: Number(book.availableQuantity),
      category: book.category
    };

    try {
      await API.put(`/books/${id}`, payload);
      alert("Book updated successfully");

    } catch (err) {
      console.log("UPDATE error:", err);
      alert("Failed to update book");
    }
  };

  return (
    <AdminLayout>

      <h2>Edit Book</h2>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/admin/manage-books")}
      >
        ← Back
      </button>

      <input
        type="text"
        placeholder="Title"
        value={book.title || ""}
        onChange={(e) =>
          setBook({ ...book, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Author"
        value={book.author || ""}
        onChange={(e) =>
          setBook({ ...book, author: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Available Quantity"
        value={book.availableQuantity || ""}
        onChange={(e) =>
          setBook({ ...book, availableQuantity: e.target.value })
        }
      />

      <button onClick={updateBook}>
        Update Book
      </button>

    </AdminLayout>
  );
}

export default EditBook;