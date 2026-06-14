import { useState } from "react";
import { addUser } from "../services/librarianService";

function AddLibrarian() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addUser({
        ...form,
        role: "LIBRARIAN",
      });

      alert("Librarian added successfully!");

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add librarian");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "400px",
          borderRadius: "16px",
          padding: "25px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          borderTop: "6px solid #6d28d9",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            color: "#6d28d9",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Add Librarian
        </h2>

        {/* INPUTS */}
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* BUTTON */}
        <button onClick={handleSubmit} style={btnStyle}>
          Add Librarian
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default AddLibrarian;