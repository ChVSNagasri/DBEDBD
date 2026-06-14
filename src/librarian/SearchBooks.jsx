import { useEffect, useState } from "react";
import { API } from "../services/api";

function SearchBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🎨 INLINE STYLES
  const pageStyle = {
    padding: "20px",
    background: "#f5f7fb",
    minHeight: "100vh",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    width: "250px",
    background: "white",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderLeft: "5px solid #4a90e2",
    transition: "0.3s",
  };

  const hoverStyle = {
    transform: "translateY(-5px)",
  };

  const spanStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    background: "#e6f0ff",
    borderRadius: "8px",
    fontSize: "12px",
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>📚 
        Books List
      </h2>

      <div style={containerStyle}>
        {books.length === 0 ? (
          <p>No books found</p>
        ) : (
          books.map((b) => (
            <div
              key={b.id}
              style={cardStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <h3>📘 {b.title}</h3>
              <p>✍️ {b.author}</p>
              <span style={spanStyle}>
                📦 Available: {b.available_quantity}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchBooks;