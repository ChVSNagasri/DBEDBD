import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function AdminSidebar() {
  return (
    <div className='sidebar'>
      <h2 className='logo'>📚 Admin</h2>

      <nav className='sidebar-nav'>
        <Link to='/admin/dashboard' className='nav-link'>📊 Dashboard</Link>
        <Link to='/admin/add-book' className='nav-link'>➕📖 Add Book</Link>
        <Link to='/admin/manage-books' className='nav-link'>📚 Manage Books</Link>
        <Link to='/admin/manage-users' className='nav-link'>👥 Manage Users</Link>
        <Link to='/admin/add-librarian' className='nav-link'>👨‍🏫 Add Librarian</Link>
        <Link to='/admin/categories' className='nav-link'>🏷️ Categories</Link>
        <Link to='/admin/profile' className='nav-link'>👤 Profile</Link>
      </nav>

      <Link to='/login' className='logout-link'>🚪 Logout</Link>
    </div>
  )
}

export default AdminSidebar