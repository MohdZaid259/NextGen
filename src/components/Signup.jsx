import google from '../assets/icons/google.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { login } from '../Redux/authSlice'
import { FirebaseContext } from '../context/Firebase.jsx'
import { useDispatch } from 'react-redux'
import useLocalStorage from '../hooks/useLocalStorage'

function SignUp() {
  const { signUp, signUpGoogle, putUser } = useContext(FirebaseContext)
  const { register, handleSubmit } = useForm()
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { setData } = useLocalStorage('auth')

  function handleGSignUp(){
    signUpGoogle()
      .then((res)=>{
        setData(res?.user?.providerData[0])
        dispatch(login(res?.user?.providerData[0]))
        putUser(res?.user?.providerData[0])
        navigate('/')
      })
      .catch((err)=>console.log(err))
  }
  function handleSignup({email,password}){
    signUp(email,password)
      .then((res)=>{
        setData(res?.user?.providerData[0])
        dispatch(login(res?.user?.providerData[0]))
        putUser(res?.user?.providerData[0])
        navigate('/')
      }).catch((err)=>{
        console.log('Error in signUp: ',err)
    })
  }
  
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-4/5 sm:w-1/2 lg:w-1/3 m-auto  flex flex-col drop-shadow-lg bg-white rounded-md p-5'>
        <p className='font-bold font-nunito text-2xl'>Sign Up</p>
        <div onClick={handleGSignUp} className='border-2 flex justify-center cursor-pointer items-center hover:border-green-500 rounded-sm my-4 py-1 text-center'>
          <img loading='lazy' className='w-5 mr-3' src={google} alt="googleIcon" />
          <span className='font-nunito'>Sign up with Google</span>
        </div>
        <hr />
        <form onSubmit={handleSubmit(handleSignup)} className='flex my-2 font-nunito flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='name' {...register('name',{required:true})} type="text" />
          <label htmlFor="email">Email</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='email' {...register('email',{required:true})} type="text" />
          <label htmlFor="password">Password</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='password' {...register('password',{required:true})} type="password" />
          <div className='mt-2 ml-1'>
            <input type="checkbox" name="" id="agree"/>
            <label className='text-gray-500 ml-1' htmlFor="agree" > I agree with <span className='text-green-500'>terms & conditions</span></label>
          </div>
          <button className='bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 rounded-md my-3' type='submit'>SignUp</button>
        </form>
        <hr />
        <span className='mt-3 font-nunito text-gray-500 text-center'>Already have an account?</span>
        <span className='text-center font-nunito hover:text-emerald-600 hover:underline text-green-500' onClick={()=>navigate('/login')}>LogIn</span>
      </div>
    </div>
  )
}
export default SignUp