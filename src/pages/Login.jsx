import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import OIP from '../images/OIP.jpg';

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/auth/login',
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Verify selected role matches backend role
      if (res.data.role !== role) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        alert(`Invalid ${role} credentials`);
        return;
      }

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      alert('Login Success');

      switch (res.data.role) {
        case 'ADMIN':
          navigate('/admin');
          break;
        case 'LIBRARIAN':
          navigate('/librarian');
          break;
        case 'STUDENT':
          navigate('/student');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      alert(err.response?.data?.detail || 'Invalid Credentials');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background: '#8b5cf6',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={OIP}
          alt="Library"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        {/* Team Members */}
        <div
          style={{
            marginTop: '30px',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
            lineHeight: '1.6',
          }}
        >
          <h3 style={{ marginBottom: '10px' }}>Team Members</h3>
          <p>
            NAGASRI – 2500030484<br />
            TAPASYANI – 2500031137<br />
            SUPRIYA – 2500030483
          </p>
        </div>
      </div>

      {/* Right Side Login */}
      <div
        style={{
          flex: 1,
          background: '#f5f3ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="form-container">
          <h1>KLU LIBRARY MANAGEMENT SYSTEM</h1>

          {!role ? (
            <>
              <h2>Select Role</h2>

              <button onClick={() => setRole('ADMIN')}>
                👨‍💼 Admin
              </button>

              <br /><br />

              <button onClick={() => setRole('LIBRARIAN')}>
                📖 Librarian
              </button>

              <br /><br />

              <button onClick={() => setRole('STUDENT')}>
                👨‍🎓 Student
              </button>
            </>
          ) : (
            <>
              <h2>{role} Login</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <br /><br />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <br /><br />

                <button type="submit">
                  Login
                </button>
              </form>

              {role === 'STUDENT' && (
                <p>
                  Don't have an account?{' '}
                  <Link to="/register">Register</Link>
                </p>
              )}

              <button
                style={{ marginTop: '10px' }}
                onClick={() => {
                  setRole('');
                  setFormData({
                    email: '',
                    password: '',
                  });
                }}
              >
                ⬅ Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;