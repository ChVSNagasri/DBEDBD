import { useEffect, useState } from "react";
import StudentLayout from "../layouts/StudentLayout";
import BookCard from "../components/BookCard";
import { getBooks } from "../services/bookService";

function AvailableBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await getBooks();
      console.log("API RESPONSE:", res.data);
      setBooks(res.data || []);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  return (
    <StudentLayout>
      <h1>Available Books</h1>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </StudentLayout>
  );
}

export default AvailableBooks;