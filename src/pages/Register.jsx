import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import OIP from '../images/OIP.jpg'
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT'
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
        'http://127.0.0.1:8000/auth/register',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      console.log(res.data)
      alert('Registered Successfully')
    } catch (err) {
      console.log(err.response?.data)
      alert(err.response?.data?.detail || 'Registration Failed')
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <div style={{
        flex: 1,
        background: '#8b5cf6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src={OIP} alt='Library'   style={{
                                       borderRadius: '50%',
                                       width: '500px',
                                       height: '500px'
                                     }} />
        
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f3ff'
      }}>
        
        <div className='form-container'>
          <h1>KLU LIBRARY MANAGEMENT SYSTEM</h1>
          <h1 style={{ color: '#8b5cf6' }}>Register</h1>

          <form onSubmit={handleSubmit}>

            <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleChange}
              required
            />

            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChange}
              required
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              required
            />

            <select
              name='role'
              value={formData.role}
              onChange={handleChange}
            >
              <option value='SelectRole'>Select Role</option>
              <option value='STUDENT'>Student</option>
            </select>

            <button type='submit'>Register</button>
          </form>

          <p>
            Already have account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register