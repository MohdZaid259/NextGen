import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import google from '../assets/icons/google.png'
import mark from '../assets/icons/mark.png'
import Input from './Input'

function SignUp() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const navigate=useNavigate()

  function handleSignup(data){
    console.log(data)
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full sm:w-4/6 md:w-7/12 lg:w-2/5 xl:w-1/3  md:m-auto mx-10  flex flex-col drop-shadow-lg bg-white rounded-md p-3 xl:p-5'>
      <p className='font-bold font-nunito text-2xl'>Sign Up</p>
        <div className='border-2 hover:border-green-500 rounded-sm my-4 py-1 text-center flex justify-center items-center'>
          <img className='w-5 mr-3' src={google} alt="" />
          <span className='font-nunito'>Sign up with Google</span>
        </div>
        <hr />
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className='flex my-2 font-nunito flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <Input className={`rounded-sm p-1 outline-none border-2 ${errors.name?.message?'focus:border-red-600':''} focus:border-green-500`} id='name' type="text" {...register('name',{required:'Enter your name'})}/>
            {errors.name?.message && <div className='flex '><img className='w-4 mr-2 mb-[0.5] object-contain' src={mark}/> <p className='text-red-600 text-sm'>{errors.name?.message}</p></div>}
            <label htmlFor="email">Email</label>
            <Input 
            className={`rounded-sm p-1 outline-none border-2  ${errors.email?.message?'focus:border-red-600':''} focus:border-green-500`} 
            id='email'  
            type="text" 
            {...register('email',{
              required:'Enter your email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
            }})} />
            {errors.email?.message && <div className='flex '><img className='w-4 mr-2 mb-[0.5] object-contain' src={mark}/> <p className='text-red-600 text-sm'>{errors.email?.message}</p></div>}
            <label htmlFor="password">Password</label>
            <Input className={`rounded-sm p-1 outline-none border-2  ${errors.password?.message?'focus:border-red-600':''} focus:border-green-500`} id='password'  type="password" {...register('password',{required:'Enter your password',minLength:{value:5,message:'Minimum length should be 5'}})} />
            {errors.password?.message && <div className='flex '><img className='w-4 mr-2 mb-[0.5] object-contain' src={mark}/> <p className='text-red-600 text-sm'>{errors.password?.message}</p></div>}
            <div className='mt-2 ml-1 flex items-center'>
              <Input className='w-4 h-4 accent-emerald-400' type="checkbox" id="agree"/>
              <label className='text-gray-500 ml-1' htmlFor="agree" > By continuing, you agree with <span className='text-green-500'>terms</span> & <span className='text-green-500'>privacy policy</span>.</label>
            </div>
            <button className='bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 rounded-md my-3' onClick={handleSignup}>SignUp</button>
          </div>
        </form>
        <hr />
        <span className='mt-3 font-nunito text-gray-500 text-center'>Already have an account?</span>
        <span className='text-center font-nunito hover:text-emerald-600 hover:underline text-green-500' onClick={()=>navigate('/login')}>LogIn</span>
      </div>
    </div>
  )
}

export default SignUp