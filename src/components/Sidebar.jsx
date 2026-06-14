import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='logo'>Library</h2>

      <Link to='/admin/dashboard'>Dashboard</Link>
      <Link to='/admin/add-book'>Add Book</Link>
      <Link to='/admin/manage-books'>Manage Books</Link>
      <Link to='/admin/manage-users'>Users</Link>
      <Link to='/admin/reports'>Reports</Link>
      <Link to='/librarian/issue-book'>Issue Book</Link>
      <Link to='/librarian/return-book'>Return Book</Link>
      <Link to='/student/dashboard'>Student</Link>
      <Link to='/notifications'>Notifications</Link>
      <Link to='/login'>Logout</Link>
    </div>
  )
}

export default Sidebar