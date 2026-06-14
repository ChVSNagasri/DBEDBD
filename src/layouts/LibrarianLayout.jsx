import { Outlet } from 'react-router-dom'
import LibrarianSidebar from '../components/LibrarianSidebar'

function LibrarianLayout() {
  return (
    <div className='layout'>
      <LibrarianSidebar />

      <div className='layout-content'>
        <div className='page-content'>
          <Outlet />   {/* 🔥 THIS FIXES EVERYTHING */}
        </div>
      </div>
    </div>
  )
}

export default LibrarianLayout