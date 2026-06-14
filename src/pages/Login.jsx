import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import OIP from '../images/OIP.jpg'

function Login() {
  const navigate = useNavigate()

  const [role, setRole] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await axios.post(
      'http://127.0.0.1:8000/auth/login',
      {
        email: formData.email,
        password: formData.password
      }
    )

    // Check if selected role matches backend role
    if (res.data.role !== role) {
      localStorage.removeItem('token')
      localStorage.removeItem('role')

      alert(`Invalid ${role} credentials`)
      return
    }

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('role', res.data.role)

    alert('Login Success')

    if (res.data.role === 'ADMIN') {
      navigate('/admin')
    } else if (res.data.role === 'LIBRARIAN') {
      navigate('/librarian')
    } else if (res.data.role === 'STUDENT') {
      navigate('/student')
    }

  } catch (err) {
    alert(err.response?.data?.detail || 'Invalid Credentials')
  }
}
  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      {/* LEFT IMAGE */}
      <div style={{
        flex: 1,
        background: '#8b5cf6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={OIP}
          alt='Library'
          style={{
            borderRadius: '50%',
            width: '500px',
            height: '500px'
          }}
        />
      </div>

      {/* RIGHT FORM */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f3ff'
      }}>

        <div className='form-container'>

          <h1>KLU LIBRARY MANAGEMENT SYSTEM</h1>

          {/* ROLE SELECTION */}
          {!role && (
            <>
              <h2>Select Role</h2>

              <button onClick={() => setRole('ADMIN')}>Admin</button>
              <pre/>
              <button onClick={() => setRole('LIBRARIAN')}>Librarian</button>
              <pre/>
              <button onClick={() => setRole('STUDENT')}>Student</button>
            </>
          )}

          {/* LOGIN FORM */}
          {role && (
            <>
              <h2>{role} Login</h2>

              <form onSubmit={handleSubmit}>

                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button type='submit'>Login</button>

              </form>

              {/* ONLY STUDENT CAN SEE REGISTER */}
              {role === 'STUDENT' && (
                <p>
                  Don't have account?{' '}
                  <Link to='/register'>Register</Link>
                </p>
              )}

              <button
                style={{ marginTop: '10px' }}
                onClick={() => {
                  setRole('')
                  setFormData({ email: '', password: '' })
                }}
              >
                Back 
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Login