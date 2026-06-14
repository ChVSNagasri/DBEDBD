import './bookcard.css'
import { borrowBook } from "../services/borrowService";
import { addToWishlist } from "../services/wishlistService";

function BookCard({ book }) {

  // ✅ BORROW BOOK
  const handleBorrow = async () => {
    const studentId = localStorage.getItem("studentId") || 1;

    try {
      await borrowBook(book.id, studentId);
      alert("Book borrowed successfully!");
    } catch (err) {
      console.log(err);
      alert("Borrow failed");
    }
  };

  // ❤️ ADD TO WISHLIST (FIXED)
  const handleWishlist = async () => {
    const studentId = localStorage.getItem("studentId") || 1;

    try {
      await addToWishlist({
        studentId: Number(studentId),
        bookId: book.id,
        bookTitle: book.title
      });

      alert("Added to Wishlist ❤️");
    } catch (err) {
      console.log(err);
      alert("Wishlist failed");
    }
  };

  return (
    <div className="book-card">

      <div className="book-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
          alt="book"
        />
      </div>

      <div className="book-info">
        <h3>{book.title}</h3>

        <p><b>Author:</b> {book.author}</p>

        <p><b>Category:</b> {book.category?.categoryName}</p>

        <p><b>Available:</b> {book.availableQuantity}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>

          <button onClick={handleBorrow}>
            Borrow
          </button>

          <button onClick={handleWishlist}>
            ❤️ Wishlist
          </button>

        </div>
      </div>

    </div>
  );
}

export default BookCard;