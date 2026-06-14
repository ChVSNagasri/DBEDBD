import AdminLayout from '../layouts/AdminLayout'
import Nag from '../images/Nag.jpg'
function Profile() {

  return (
    <AdminLayout>

      <div
        className='card'
        style={{
          maxWidth: '500px',
          margin: 'auto',
          padding: '30px'
        }}
      >

        <center>
<img src={Nag} alt='Library'   style={{
              borderRadius: '50%',
              width: '150px',
              height: '150px'
            }} />
          

          <h2>
            Admin User
          </h2>

          <p>
            vamana@gmail.com
          </p>

          <p>
            +91 9876543210
          </p>

          <p>
            Vijayawada, India
          </p>

        </center>

        <br />

        <form>

          <input
            type='text'
            placeholder='Full Name'
            value='Admin User'
          />

          <input
            type='email'
            placeholder='Email'
            value='vamana@gmail.com'
          />

          <input
            type='text'
            placeholder='Phone'
            value='9876543210'
          />

        </form>

      </div>

    </AdminLayout>
  )
}

export default Profile