import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function StudentSidebar() {
  return (
    <div className='sidebar'>
      <h2 className='logo'>👨‍🎓 Student</h2>

      <nav className='sidebar-nav'>
        <Link to='/student/dashboard' className='nav-link'>Dashboard</Link>
        <Link to='/student/available-books' className='nav-link'>Available Books</Link>
        <Link to='/student/borrowed-books' className='nav-link'>Borrowed Books</Link>
        <Link to='/student/wishlist' className='nav-link'>Wishlist</Link>
        <Link to='/student/fine-status' className='nav-link'>Fine Status</Link>
        <Link to='/student/profile' className='nav-link'>Profile</Link>
      </nav>

      <Link to='/login' className='logout-link'>Logout</Link>
    </div>
  )
}

export default StudentSidebar
