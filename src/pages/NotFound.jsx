import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#f5f3ff'
      }}
    >
      <h1
        style={{
          fontSize: '100px',
          color: '#8b5cf6',
          margin: 0
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does
        not exist.
      </p>

      <Link to='/'>
        <button>
          Back To Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound