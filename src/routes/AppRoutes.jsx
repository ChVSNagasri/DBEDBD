import { Routes, Route } from 'react-router-dom'

// Auth Pages
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

// Layouts
import AdminLayout from '../layouts/AdminLayout'
import LibrarianLayout from '../layouts/LibrarianLayout'
import StudentLayout from '../layouts/StudentLayout'

// Admin Components
import AdminDashboard from '../admin/AdminDashboard'
import AddBook from '../admin/AddBook'
import EditBook from '../admin/EditBook'
import ManageBooks from '../admin/ManageBooks'
import ManageUsers from '../admin/ManageUsers'
import AddLibrarian from '../admin/AddLibrarian'
import Categories from '../admin/Categories'


import Profile from '../admin/Profile'

import Notifications from '../admin/Notifications'

// Librarian Components
import LibrarianDashboard from '../librarian/LibrarianDashboard'
import IssueBook from '../librarian/IssueBook'
import ReturnBook from '../librarian/ReturnBook'
import SearchBooks from '../librarian/SearchBooks'
import OverdueBooks from '../librarian/OverdueBooks'
import StudentHistory from '../librarian/StudentHistory'
import LibrarianTransactions from '../librarian/Transactions'
import LibrarianNotifications from '../librarian/Notifications'
import LibrarianProfile from '../librarian/Profile'

// Student Components
import StudentDashboard from '../student/StudentDashboard'
import AvailableBooks from '../student/AvailableBooks'
import BorrowedBooks from '../student/BorrowedBooks'
import Wishlist from '../student/Wishlist'
import FineStatus from '../student/FineStatus'
import BookDetails from '../student/BookDetails'
import StudentNotifications from '../student/Notifications'
import StudentProfile from '../student/Profile'

// Error Page
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />

      {/* Admin Routes */}
      <Route path='/admin' element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path='/admin/dashboard' element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path='/admin/add-book' element={<AdminLayout><AddBook /></AdminLayout>} />
      <Route path='/admin/edit-book/:id' element={<AdminLayout><EditBook /></AdminLayout>} />
      <Route path='/admin/manage-books' element={<AdminLayout><ManageBooks /></AdminLayout>} />
      <Route path='/admin/manage-users' element={<AdminLayout><ManageUsers /></AdminLayout>} />
      <Route path='/admin/add-librarian' element={<AdminLayout><AddLibrarian /></AdminLayout>} />
      <Route path='/admin/categories' element={<AdminLayout><Categories /></AdminLayout>} />
      
      <Route path='/admin/profile' element={<AdminLayout><Profile /></AdminLayout>} />
      
      <Route path='/admin/notifications' element={<AdminLayout><Notifications /></AdminLayout>} />

      {/* Librarian Routes */}
    <Route path="/librarian" element={<LibrarianLayout />}>
  
  {/* DEFAULT PAGE */}
  <Route index element={<LibrarianDashboard />} />

  <Route path="dashboard" element={<LibrarianDashboard />} />
  <Route path="issue-book" element={<IssueBook />} />
  <Route path="return-book" element={<ReturnBook />} />
  <Route path="search-books" element={<SearchBooks />} />
  <Route path="overdue-books" element={<OverdueBooks />} />
  <Route path="student-history" element={<StudentHistory />} />
  <Route path="transactions" element={<LibrarianTransactions />} />
  <Route path="notifications" element={<LibrarianNotifications />} />
  <Route path="profile" element={<LibrarianProfile />} />

</Route>

      {/* Student Routes */}
      <Route path='/student' element={<StudentLayout><StudentDashboard /></StudentLayout>} />
      <Route path='/student/dashboard' element={<StudentLayout><StudentDashboard /></StudentLayout>} />
      <Route path='/student/available-books' element={<StudentLayout><AvailableBooks /></StudentLayout>} />
      <Route path='/student/borrowed-books' element={<StudentLayout><BorrowedBooks /></StudentLayout>} />
      <Route path='/student/wishlist' element={<StudentLayout><Wishlist /></StudentLayout>} />
      <Route path='/student/fine-status' element={<StudentLayout><FineStatus /></StudentLayout>} />
      <Route path='/student/book-details/:id' element={<StudentLayout><BookDetails /></StudentLayout>} />
      <Route path='/student/history' element={<StudentLayout><BorrowedBooks /></StudentLayout>} />
      <Route path='/student/notifications' element={<StudentLayout><StudentNotifications /></StudentLayout>} />
      <Route path='/student/profile' element={<StudentLayout><StudentProfile /></StudentLayout>} />

      {/* 404 Not Found */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes