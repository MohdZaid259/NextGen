import {forwardRef} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPopup({className},ref) {
  const navigate=useNavigate()

  return (
    <div className={`p-2 border border-emerald-700 flex flex-col rounded-md bg-white ${className}`}>
      <button className='bg-emerald-500 px-2 m-auto mb-1 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-md font-semibold rounded-sm' onClick={()=>navigate('/signup')}>Signup</button>
      <span className='text-xs'>New customer? <span onClick={()=>navigate('/signup')} className='underline cursor-pointer text-emerald-600'>Start here.</span></span>
    </div>
  )
}

export default forwardRef(LoginPopup)