import { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../layouts/AdminLayout'
import { addBook } from '../services/bookService'

function AddBook() {

  const [book, setBook] = useState({
    title: '',
    author: '',
    availableQuantity: '',
    categoryId: ''
  })

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:9090/api/categories'
      )

      console.log('Categories:', response.data)

      setCategories(response.data)

    } catch (error) {
      console.log(error)
      alert('Failed to load categories')
    }
  }

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      title: book.title,
      author: book.author,
      availableQuantity: Number(book.availableQuantity),
      category: {
        id: Number(book.categoryId)
      }
    }

    console.log('Sending Payload:', payload)

    try {

      await addBook(payload)

      alert('Book Added Successfully')

      setBook({
        title: '',
        author: '',
        availableQuantity: '',
        categoryId: ''
      })

    } catch (error) {

      console.log(error)

      if (error.response) {
        console.log(error.response.data)
      }

      alert('Failed To Add Book')
    }
  }

  return (
    <AdminLayout>

      <div className='form-container'>

        <h1>Add Book</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            required
          />

          <select
            name="categoryId"
            value={book.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Category
            </option>

            {categories.map((cat) => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.categoryName}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            value={book.availableQuantity}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Add Book
          </button>

        </form>

      </div>

    </AdminLayout>
  )
}

export default AddBook