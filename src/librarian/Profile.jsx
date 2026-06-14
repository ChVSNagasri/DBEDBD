
import Nag from "../images/Nag.jpg";

function Profile() {
  return (
    <div className="main">
     

      <div
        className="card"
        style={{
          width: "420px",
          margin: "30px auto",
          padding: "20px",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <img
          src={Nag}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "140px",
            height: "140px",
            objectFit: "cover",
            marginBottom: "15px"
          }}
        />

        <h2>📚 Librarian Profile</h2>

        <div style={{ marginTop: "15px", lineHeight: "1.8" }}>
          <p><b>ID:</b> 2500030484</p>
          <p><b>Email:</b> 2500030484@gmail.com</p>
          <p><b>Phone:</b> 9876543210</p>
          <p><b>Role:</b> Librarian</p>
        </div>

      
      </div>
    </div>
  );
}

export default Profile;