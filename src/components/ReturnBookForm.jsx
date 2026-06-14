import { useState } from 'react'

function ReturnBookForm() {
  const [formData, setFormData] = useState({
    issueId: '',
    bookId: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Book Returned')
  }

  return (
    <div className='form-container'>
      <h2>Return Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='issueId'
          placeholder='Issue ID'
          onChange={handleChange}
        />

        <input
          type='text'
          name='bookId'
          placeholder='Book ID'
          onChange={handleChange}
        />

        <button>Return Book</button>
      </form>
    </div>
  )
}

export default ReturnBookForm