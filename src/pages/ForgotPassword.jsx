import { useState } from 'react'
import Navbar from '../components/Navbar'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Password reset link sent')
  }

  return (
    <>
      <Navbar />

      <div className='main'>
        <div className='form-container'>
          <h2>Forgot Password</h2>

          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button>Send Reset Link</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword