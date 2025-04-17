import { useContext } from 'react';
import missingCart from '../assets/missingCart.webp'
import { useSelector } from 'react-redux';
import { X, CircleHelp, Tags, ChevronRight } from 'lucide-react'
import ProInCart from './ProInCart';
import { useNavigate } from 'react-router-dom';
import { CardPanelContext } from '../context/cartPanel';
import logo from '../assets/logo.png'
import { razorpayConf } from '@/conf/conf';
import { FirebaseContext } from '../context/Firebase.jsx'

function Cart() {
  const { placeOrder } = useContext(FirebaseContext)

  const navigate = useNavigate()
  const userData=useSelector(state=>state.auth.userData)
  const { totalPrice }=useSelector(state=>state.cart)
  const cartItem=useSelector(state=>state.cart.cartItems)
  const { togglePanel } = useContext(CardPanelContext);

  const openRazorpay = () => {
    const options = {
      key: razorpayConf.razorpayApiKey,
      amount: totalPrice*100,
      currency: "USD",
      name: "NextGen Herbals",
      description: "Payment for your order",
      image: logo,
      handler: async function (response) {
        alert("Payment successful!")
        await placeOrder(response)
      },
      prefill: {
        name: userData.displayName,
        email: userData.email,
        contact: "9341528174",
      },
      notes: {
        address: "NextGen Herbals Customer",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  return (
    <>
    {userData?<>
      <div className='font-nunito'>
      <div className='flex px-5 justify-between items-center p-3 pb-0'>
        <span className='text-2xl tracking-wider text-gray-700'>Cart</span>
        <X onClick={togglePanel} className='cursor-pointer p-4 opacity-60 hover:opacity-100'/>
      </div>
      <hr className='mx-5 mb-2 border border-gray-300'/>
          {cartItem.length>0?<ProInCart/>:<img loading='lazy' className='w-full contrast-[0.9]' src={missingCart} alt="cart" />}
      <hr className='mx-5 my-2 border border-gray-300'/>
      <span className='text-lg mx-5 text-gray-800 tracking-widerd'>Recommended Products</span>
      <div className='fixed w-full z-50 px-5 py-3 bottom-0 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)]'>
        <div className='flex justify-between px-2 py-1'>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Tags/>
            <span className='text-sm font-semibold'>Available Offers</span>
          </div>
          <ChevronRight/>
        </div>
        <hr className='my-1 border border-gray-300'/>
        <div className='flex px-2 py-1 justify-between'>
          <div className='flex gap-2 items-center'>
            <span className='text-gray-700 text-xs tracking-widest'>SUBTOTAL</span>
            <CircleHelp className='opacity-50 cursor-pointer'/>
          </div>
          <span>$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className='flex px-2 gap-2'>
          <input className='p-1 border outline-none border-black rounded-sm w-full text-sm' type="text" placeholder='Discount code or gift card'/>
          <button className='text-white bg-emerald-700 hover:bg-emerald-800 p-2 text-sm rounded-sm '>Apply</button>
        </div>
        <button onClick={openRazorpay} className='bg-emerald-500 my-2 w-full hover:bg-emerald-600 py-[6px] rounded-tl-2xl rounded-br-2xl text-white'>CHECK OUT</button>
      </div>  
      </div>
    </>:<>
      <div className='p-10 h-full flex justify-center items-center'>
        <X onClick={togglePanel} className='h-12 cursor-pointer absolute right-5 top-5 p-4 opacity-50 hover:opacity-100'/>
        <div className='rounded-md bg-white drop-shadow-lg flex flex-col p-10 pb-7'>
          <img loading='lazy' className='w-56 m-auto mb-5' src={missingCart} alt="" />
          <span className='text-lg text-center'>Missing Cart items?</span>
          <span className='text-md text-center'>Login to see the items you added previously</span>
          <button className='bg-emerald-500 m-auto active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 w-32 rounded-sm mt-3' onClick={()=>{navigate('/signup'),togglePanel()}}>Login</button>
        </div>
      </div>
    </>}
    </>
  )
}

export default Cart