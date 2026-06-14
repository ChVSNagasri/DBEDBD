import { useState } from 'react'

function IssueBookForm() {
  const [formData, setFormData] = useState({
    studentId: '',
    bookId: '',
    issueDate: '',
    dueDate: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Book Issued Successfully')
  }

  return (
    <div className='form-container'>
      <h2>Issue Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='studentId'
          placeholder='Student ID'
          onChange={handleChange}
        />

        <input
          type='text'
          name='bookId'
          placeholder='Book ID'
          onChange={handleChange}
        />

        <label>Issue Date</label>

        <input
          type='date'
          name='issueDate'
          onChange={handleChange}
        />

        <label>Due Date</label>

        <input
          type='date'
          name='dueDate'
          onChange={handleChange}
        />

        <button>Issue Book</button>
      </form>
    </div>
  )
}

export default IssueBookForm