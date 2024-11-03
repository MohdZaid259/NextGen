import {useEffect,lazy,Suspense} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'
import {addToCart} from './Redux/cartSlice'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const dispatch=useDispatch()
  const {getData} =useLocalStorage('localCart')
  let itemList=getData()

  useEffect(()=>{
    if(itemList){
      itemList.map((item)=>dispatch(addToCart(item)))
    }
  },[])
  // useEffect(()=>{
  //   if(!isLoading && isAuthenticated && user){
  //     dispatch(login(user))
  //   }else{
  //     dispatch(logout())
  //   }
  // },[isLoading,isAuthenticated,user])

  // if(isLoading) return <p>Loading...</p>
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