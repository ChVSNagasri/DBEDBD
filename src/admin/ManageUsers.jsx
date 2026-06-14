import { useEffect, useState } from 'react'
import axios from 'axios'

function ManageUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {

    try {

      const response = await axios.get(
        'http://localhost:9090/api/users'
      )

      setUsers(response.data)

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="manage-users">

      <h1>Manage Users</h1>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default ManageUsers