import { useState } from 'react'
import { useSelector } from 'react-redux';
import close from '../assets/icons/close.png'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FirebaseContext } from '../context/Firebase';

function Profile() {
  const userData=useSelector(state=>state.auth.userData)
  console.log(userData)
  const {signOutUser} = useContext(FirebaseContext)
  const [data,setData]=useState({
    name: 'ad',
    username:'da',
    status:'Active',
    about:''
  })
  const navigate=useNavigate()

  function handleChange(e){
    const {name,value}=e.target
    setData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  function toggleStatus(){
    setData((prev) => ({
      ...prev,
      status: prev.status === 'Active' ? 'Inactive' : 'Active'
    }));
  }
  function submitInfo(){
    
  }
  function handleLogout(){
    signOutUser()
    .then(res=>console.log(res))
    .catch((err)=>console.log('signout err: ',err))
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-white relative text-sm mt-20 mx-5 sm:mx-0 mb-10 w-full sm:w-3/4 md:w-3/5 lg:w-2/5 p-5 font-nunito rounded shadow-md'>
        <img onClick={()=>navigate('/')} className='w-4 absolute right-7 cursor-pointer opacity-50 hover:opacity-100' src={close} alt="" />
        <div className='flex flex-col my-3 gap-1'>
          <span className=' text-gray-600 font-semibold'>Display picture</span>
          <div className='flex mt-2'>
            <img className='w-12 rounded-md mx-5' src={'picture'} alt="" />
            <div className='flex mx-auto justify-center items-center'>
            <button className='bg-emerald-500 mr-3 rounded-md active:bg-emerald-500 hover:bg-emerald-600 text-white px-2  py-1'>Change picture</button>
            <button className='text-red-500  hover:bg-red-500 hover:text-white active:bg-red-500 px-2 py-1 border rounded-md'>Delete picture</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col my-3 gap-1'>
          <span className=' text-gray-600 font-semibold'>Profile name</span>
          <input className='px-2 py-1 border w-full rounded focus:border-emerald-500 outline-none' name='name' type="text" onChange={handleChange} value={data.name} />
        </div>
        <div className='flex flex-col my-3 gap-1'>
          <span className=' text-gray-600 font-semibold'>Username</span>
          <input className='px-2 py-1 border w-full rounded' type="text" value={'@ '+data.username} disabled/>
        </div>
        <div className='flex flex-col my-3 gap-1'>
          <span className=' text-gray-600 font-semibold'>Status recently</span>
          <input className='px-2 py-1 border w-full rounded focus:border-emerald-500 cursor-pointer outline-none' type="text" onClick={toggleStatus} name='status' value={data.status}/>
        </div>
        <div className='flex flex-col my-3 gap-1'>
          <span className=' text-gray-600 font-semibold'>About me</span>
          <input className='px-2 py-1 border w-full rounded focus:border-emerald-500 outline-none' type="text" placeholder='A brief introduction of yourself...' onChange={handleChange} name='about' value={data.about}/>
        </div>
        <div className='flex mt-5 justify-end items-center gap-2'>
        <button className='text-sm text-white bg-emerald-500 font-semibold hover:bg-emerald-600 active:bg-emerald-500 px-2 py-1 rounded-md' onClick={()=>submitInfo}>Save Changes</button>
        <button className=' text-white bg-red-500 font-semibold text-sm hover:bg-red-600 active:bg-red-500 px-2 py-1 rounded-md' onClick={()=>handleLogout()}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile