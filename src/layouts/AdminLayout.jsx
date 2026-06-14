import AdminSidebar from '../components/AdminSidebar'


function AdminLayout({ children }) {
  return (
    <div className='layout'>
      <AdminSidebar />

      <div className='layout-content'>
       

        <div className='page-content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout