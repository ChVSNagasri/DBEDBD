import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { springAPI as API } from "../services/axiosConfig";

function ManageBooks() {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // GET all books
  const fetchBooks = async () => {
    try {
      const res = await API.get('/books');
      setBooks(res.data);
    } catch (err) {
      console.log("GET error:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // DELETE book
  const deleteBook = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/books/${id}`);

      alert("Book deleted successfully");

      fetchBooks();

    } catch (err) {

      console.log("DELETE error:", err);

      alert("Failed to delete book");
    }
  };

  return (
    <AdminLayout>

      <h1>Manage Books</h1>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {books.length === 0 ? (
            <tr>
              <td colSpan="6">No Books Found</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>

                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.availableQuantity}</td>

                <td>
                  {book.category
                    ? book.category.categoryName
                    : "No Category"}
                </td>

                <td>

                  <button
                    onClick={() =>
                      navigate(`/admin/edit-book/${book.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </AdminLayout>
  );
}

export default ManageBooks;