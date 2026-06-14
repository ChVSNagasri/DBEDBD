import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <h2>Library Management</h2>
      </div>

      <div className='nav-right'>
        <input type='text' placeholder='Search books...' />

        <button className='notification-btn'>
          🔔
        </button>

        <img
          src='https://i.pravatar.cc/40'
          alt='profile'
          className='profile-img'
        />
      </div>
    </div>
  )
}

export default Navbar