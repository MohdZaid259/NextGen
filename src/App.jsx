import {useEffect,lazy,Suspense, useState} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'
import {addToCart} from './Redux/cartSlice'
import useLocalStorage from './hooks/useLocalStorage'
import { useContext } from 'react'
import { FirebaseContext } from './context/Firebase'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  const {getData} =useLocalStorage('localCart')
  let itemList=getData()
  
  let {auth}=useContext(FirebaseContext)
  let userData=auth?.currentUser?.providerData[0]

  useEffect(()=>{
    if(itemList){
      itemList.map((item)=>dispatch(addToCart(item)))
    }
  },[])

  useEffect(()=>{
      if(!loading && auth){
        dispatch(login(userData))
        setLoading(false)
      }else{
        dispatch(logout())
        setLoading(false)
      }
  },[loading,auth,dispatch,userData])

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