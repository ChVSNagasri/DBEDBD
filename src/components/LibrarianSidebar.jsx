import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function LibrarianSidebar() {
  return (
    <div className='sidebar'>
      <h2 className='logo'>📖 Librarian</h2>

      <nav className='sidebar-nav'>
        <Link to='/librarian/dashboard' className='nav-link'>
          📊 Dashboard
        </Link>

        <Link to='/librarian/search-books' className='nav-link'>
          📚 Books List
        </Link>

        <Link to='/librarian/student-history' className='nav-link'>
          👨‍🎓 Student History
        </Link>

        <Link to='/librarian/notifications' className='nav-link'>
          🔔 Notifications
        </Link>

        <Link to='/librarian/profile' className='nav-link'>
          👤 Profile
        </Link>
      </nav>

      <Link to='/login' className='logout-link'>
        🚪 Logout
      </Link>
    </div>
  )
}

export default LibrarianSidebar