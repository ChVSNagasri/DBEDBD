import { useEffect, useState } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { springAPI as API } from '../services/axiosConfig'

function Categories() {

  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // GET categories
  const fetchCategories = async () => {
    try {
      setLoading(true)
      const res = await API.get('/categories')
      setCategories(res.data)
    } catch (err) {
      console.log("GET error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // ADD category
  const addCategory = async () => {
    if (!category.trim() || !description.trim()) {
      alert("Both Category and Description are required")
      return
    }

    try {
      await API.post('/categories', {
        categoryName: category,
        description: description
      })

      setCategory('')
      setDescription('')
      fetchCategories()

    } catch (err) {
      console.log("POST error:", err)
    }
  }

  return (
    <AdminLayout>
      <h1>Categories</h1>

      {/* FORM */}
      <div className="form-container">

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          onClick={addCategory}
          disabled={!category.trim() || !description.trim()}
        >
          Add Category
        </button>

      </div>

      {/* TABLE */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3">No Categories Found</td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.categoryName}</td>
                  <td>{cat.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

    </AdminLayout>
  )
}

export default Categories