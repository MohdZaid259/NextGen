import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function LoginPopup({className}) {
  const navigate=useNavigate()
  const {loginWithRedirect}=useAuth0()

  return (
    <div className={`p-2 border border-emerald-700 flex flex-col rounded-md bg-white ${className}`}>
      <button className='bg-emerald-500 px-2 m-auto mb-1 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-md font-semibold rounded-sm' onClick={()=>loginWithRedirect()}>Login</button>
      <span className='text-xs'>New customer? <span onClick={()=>navigate('/signup')} className='underline cursor-pointer text-emerald-600'>Start here.</span></span>
    </div>
  )
}

export default LoginPopup