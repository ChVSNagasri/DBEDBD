import StudentLayout from '../layouts/StudentLayout'
import Nag from '../images/Nag.jpg'
function Profile() {
  return (
    <StudentLayout>
      <div className='card'>
        <center>
          <img src={Nag} alt='Library'   style={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                      }} />

          <h2>Nagasri Chintalapati</h2>

          <p>
            chintalapati@gmail.com
          </p>

          <p>
            9876543210
          </p>

       
        </center>
      </div>
    </StudentLayout>
  )
}

export default Profile