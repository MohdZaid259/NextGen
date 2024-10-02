import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import close from '../assets/icons/close.png'
import menu from '../assets/icons/menu.png'
import cart from '../assets/icons/cart.png'
import profile from '../assets/icons/profile.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import LoginPopup from './LoginPopup'
import Search from './Search'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux'
import search from '../assets/icons/search.png'

let list=[
  {name:'Home',path:''},
  {name:'About Us',path:'about'},
  {name:'Product',path:'product'},
  {name:'Contact Us',path:'contact'}
]

function Navbar() {
  const [ham,setHam]=useState(false)
  const [visible,setVisible]=useState(false)
  const navigate=useNavigate()
  const AnimatePop=motion(LoginPopup)

  const {user, loginWithRedirect }=useAuth0()

  const userData=useSelector((state)=>state.auth.userData)

  useEffect(()=>{
    if(user){
      setVisible(false)
    }else{
      let showPop=setTimeout(() => {
        setVisible(true)
      }, 1500);
      let hidePop=setTimeout(() => {
        setVisible(false)
      }, 7000);
  
      return ()=>{
        clearTimeout(showPop)
        clearTimeout(hidePop)
      }
    }
  },[user])

  function handleHam(){
    setHam(!ham)
  }

  useEffect(()=>{
    function exit(e){
      if(!e.target.className.includes('navlist')){
        console.log('true')
        setHam(false)
      }
    }
    document.addEventListener('click',exit)
    return ()=>{
      document.removeEventListener('click',exit)
    }
  },[setHam])
  
  return (
    <>
      <div className='fixed top-0 z-20 w-full flex text-black justify-around items-center backdrop-blur-sm py-3 md:p-3 shadow-lg'>
        <NavLink to='' className='flex cursor-pointer'>
          <img loading='lazy' className='w-8 md:w-9' src={logo1} alt="" />
          <span className='md:pl-2 pt-1 text-lg md:text-xl font-bold'>NextGen</span>
        </NavLink>
        <div className='flex justify-center gap-5 md:gap-6 items-center'>
          <div onClick={handleHam} className="sm:hidden">
            {ham ? (
              <img loading="lazy" className="w-6 md:w-7 p-1" src={close} alt="close" />
            ) : (
              <img loading="lazy" className="w-6 md:w-7" src={menu} alt="menu" />
            )}
          </div>
          <ul onClick={handleHam} className={`absolute sm:static top-16 right-2 z-10 flex flex-col sm:flex-row sm:gap-5 gap-1 ${ham ? 'flex bg-black/70 text-white px-7 py-5 rounded-lg sm:bg-transparent sm:text-current sm:px-0 sm:py-0 sm:rounded-none' : 'hidden sm:flex'}`}>
          {list.map((item,id)=>{
            return <NavLink key={id} to={item.path} className={({isActive})=>`${isActive?'text-emerald-600':''} navlist text-lg font-semibold md:text-xl font-quicksand hover:text-emerald-600`}>{item.name}</NavLink>
          })}
          </ul>
          <div className='hidden xl:block'>
            <Search/>
          </div>
          <img className='w-5 md:w-[22px] cursor-pointer xl:hidden' src={search} alt="" />
          <div onClick={()=>{userData?navigate('/profile'):loginWithRedirect()}} className={`${user?'':'hover:bg-pink-500 hover:invert p-[6px] active:bg-pink-600 rounded-md '} flex justify-center items-center gap-2`}>
            {user?.picture?<img className='w-8 cursor-pointer rounded-full' src={user.picture}/>:<img className='cursor-pointer w-5 md:w-6' src={profile}/>}
            {user?'':<span className='text-base md:text-lg font-quicksand font-semibold '>Login</span>}
          </div>
          {visible && <AnimatePop initial={{scale:0}} animate={{scale:1}} className={`animate-bounce duration-100 absolute top-16 right-0 md:right-[95px] drop-shadow-md`}/>}
          <img onClick={()=>navigate('cart')} className='cursor-pointer  hidden md:block w-[26px]' src={cart} alt="cart" />
        </div>
      </div>
    </>
  )
}

export default Navbar