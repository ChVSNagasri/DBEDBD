import StudentSidebar from '../components/StudentSidebar'

function StudentLayout({
  children
}) {
  return (
    <div className='layout'>
      <StudentSidebar />

      <div className='layout-content'>

        <div className='page-content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StudentLayout