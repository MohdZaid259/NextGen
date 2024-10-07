import React,{useEffect,lazy,Suspense} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
import { Outlet } from 'react-router-dom'
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'

function App() {
  const {user,isAuthenticated,isLoading}=useAuth0()
  const dispatch=useDispatch()

  useEffect(()=>{
    if(!isLoading && isAuthenticated && user){
      dispatch(login(user))
    }else{
      dispatch(logout())
    }
  },[isLoading,isAuthenticated,user])

  if(isLoading) return <p>Loading...</p>
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