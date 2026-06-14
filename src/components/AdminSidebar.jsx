import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaUserTie,
  FaList,
  FaUserCircle,
  FaSignOutAlt
} from 'react-icons/fa';

function AdminSidebar() {
  return (
    <div className='sidebar'>
      <h2 className='logo'>📚 Admin</h2>

      <nav className='sidebar-nav'>
        <Link to='/admin/dashboard' className='nav-link'>
          <FaTachometerAlt className='icon' /> Dashboard
        </Link>

        <Link to='/admin/add-book' className='nav-link'>
          <FaBook className='icon' /> Add Book
        </Link>

        <Link to='/admin/manage-books' className='nav-link'>
          <FaBook className='icon' /> Manage Books
        </Link>

        <Link to='/admin/manage-users' className='nav-link'>
          <FaUsers className='icon' /> Manage Users
        </Link>

        <Link to='/admin/add-librarian' className='nav-link'>
          <FaUserTie className='icon' /> Add Librarian
        </Link>

        <Link to='/admin/categories' className='nav-link'>
          <FaList className='icon' /> Categories
        </Link>

        <Link to='/admin/profile' className='nav-link'>
          <FaUserCircle className='icon' /> Profile
        </Link>
      </nav>

      <Link to='/login' className='logout-link'>
        <FaSignOutAlt className='icon' /> Logout
      </Link>
    </div>
  );
}

export default AdminSidebar;