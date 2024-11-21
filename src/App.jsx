import {useEffect,lazy,Suspense,useState} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import { Outlet,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'
import {addToCart} from './Redux/cartSlice'
import useLocalStorage from './hooks/useLocalStorage'
import HashLoader from "react-spinners/HashLoader";

function App() {
  const dispatch=useDispatch()

  const {getData:getCartData} =useLocalStorage('localCart',true)
  let itemList=getCartData()
  const {getData:getAuthData} =useLocalStorage('auth')
  let userData=getAuthData()

  useEffect(()=>{
    if(itemList){
      itemList.map((item)=>dispatch(addToCart(item)))
    }
  },[])

  useEffect(()=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
  },[dispatch,userData])

  return (
    <Suspense fallback={
        <div className='h-screen flex justify-center items-center'>
          <HashLoader
            size={50}
            color='green'
          />
        </div>
      }>
      <Navbar/>
      <Outlet/>
      <Helpdesk/>
      <Footer/>
    </Suspense>
  )
}

export default App