import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import google from '../assets/icons/google.png'
import mark from '../assets/icons/mark.png'

function Login() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const navigate=useNavigate()

  function handleLogin(data){
    console.log(data)
  }
  console.log(errors)
  function handleForgot(){

  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-1/3 m-auto  flex flex-col drop-shadow-lg hover:drop-shadow-[green-500] bg-white rounded-md p-5'>
        <p className='font-bold font-nunito text-2xl'>Log In</p>
        <div className='border-2 hover:border-green-500 rounded-sm my-4 py-1 text-center flex justify-center items-center'>
          <img className='w-5 mr-3' src={google} alt="" />
          <span className='font-nunito'>Log In with Google</span>
        </div>
        <hr />
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='flex my-2 font-nunito flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input className={`rounded-sm p-1 outline-none border-2 ${errors?'focus:border-red-600':''} focus:border-green-500`} id='name' type="text" {...register('name',{required:'Enter your name'})}/>
            {errors && <div className='flex '><img className='w-4 mr-2 mb-[0.5] object-contain' src={mark}/> <p className='text-red-600 text-sm'>{errors.name?.message}</p></div>}
            <label htmlFor="password">Password</label>
            <input className={`rounded-sm p-1 outline-none border-2  ${errors?'focus:border-red-600':''} focus:border-green-500`} id='password'  type="password" {...register('password',{required:'Enter your password',minLength:{value:5,message:'Minimum length should be 5'}})} />
            {errors && <div className='flex '><img className='w-4 mr-2 mb-[0.5] object-contain' src={mark}/> <p className='text-red-600 text-sm'>{errors.password?.message}</p></div>}            
            <div className='mt-2 ml-1 flex items-center'>
              <input className='w-4 h-4 accent-emerald-400' type="checkbox" />
              <label className='ml-2 mt-[2px]' htmlFor="">Remember me</label>
            </div>
            <div className='flex flex-col'>
              <button className='bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 rounded-md mt-3' type='submit' onClick={handleLogin}>Login</button>
              <button className='text-emerald-500 hover:text-emerald-600 font-nunito text-lg font-semibold py-1 rounded-md mt-1' onClick={handleForgot}>Forgot Password</button>
            </div>
          </div>
        </form>
        <hr />
        <span className='mt-3 font-nunito text-gray-500 text-center'>Don't have an account?</span>
        <span className='text-center font-nunito hover:text-emerald-600 hover:underline text-green-500' onClick={()=>navigate('/signup')}>Sign Up</span>
      </div>
    </div>
  )
}

export default Login