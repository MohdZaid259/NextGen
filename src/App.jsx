import {useEffect,lazy,Suspense, useState} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'
import {addToCart} from './Redux/cartSlice'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [loading,setLoading]=useState(true)
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
        setLoading(false)
      }else{
        dispatch(logout())
        setLoading(false)
      }
  },[dispatch,userData])

  if(loading) return <p>Loading...</p>
  return (
    <Suspense fallback=''>
      <Navbar/>
      <Outlet/>
      <Helpdesk/>
      <Footer/>
    </Suspense>
  )
}

export default App