import Nag from '../images/Nag.jpg'
function AuthLayout({ children }) {
  return (
    <div className='auth-layout'>
      <div className='auth-left'>
       <img src={Nag} alt='Library'   style={{
                               borderRadius: '50%',
                               width: '150px',
                               height: '150px'
                             }} />
      </div>

      <div className='auth-right'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout