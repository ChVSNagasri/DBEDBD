import { useEffect, useState } from 'react'
import StudentLayout from '../layouts/StudentLayout'
import { getFines } from '../services/fineService'

function FineStatus() {

  const [fines, setFines] = useState([])

  useEffect(() => {
    loadFines()
  }, [])

  const loadFines = async () => {
    const response = await getFines()
    setFines(response.data)
  }

  return (
    <StudentLayout>
      <h1>Fine Status</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Fine Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {fines.map((fine) => (
            <tr key={fine.id}>
              <td>{fine.bookTitle}</td>
              <td>₹{fine.amount}</td>
              <td>{fine.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StudentLayout>
  )
}

export default FineStatus