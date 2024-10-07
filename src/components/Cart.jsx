import React, { useState } from 'react'
import missingCart from '../assets/missingCart.webp'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';

function Cart() {
  const {loginWithRedirect}=useAuth0()
  const userData=useSelector(state=>state.auth.userData)
 
  
  return (
    
    <div className='absolute right-0 top-[60px] w-1/3 h-screen z-50 bg-blue-500'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quo eius. Nemo, perspiciatis! Cumque alias odit voluptatum commodi natus, facilis atque magnam consequatur doloremque expedita rem, id iusto facere, maiores iure quod ad excepturi.</p>
    {/* {userData?<>
    welcome {userData.email}
    </>:<>

      <div className='p-10 flex justify-center items-center'>
      <div className='rounded-md bg-white drop-shadow-lg w-1/2 mt-10 flex flex-col m-auto p-10 pb-7'>
        <img loading='lazy' className='w-56 m-auto mb-5' src={missingCart} alt="" />
        <span className='text-lg text-center'>Missing Cart items?</span>
        <span className='text-md text-center'>Login to see the items you added previously</span>
        <button className='bg-emerald-500 m-auto active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 w-32 rounded-sm mt-3' onClick={()=>loginWithRedirect()}>Login</button>
      </div>
    </div>
    </>} */}
    
    </div>
  )
}

export default Cart