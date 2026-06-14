import AdminLayout from '../layouts/AdminLayout'
import Notification from '../components/Notification'

function Notifications() {

  const notifications = [

    'New Book Added Successfully',

    'Student Registered',

    'Fine Paid Successfully',

    'Book Returned'
  ]

  return (
    <AdminLayout>

      <h1>Notifications</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >

        {notifications.map(
          (note, index) => (

          <Notification
            key={index}
            message={note}
          />

        ))}

      </div>

    </AdminLayout>
  )
}

export default Notifications