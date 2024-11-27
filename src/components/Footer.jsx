import { useContext } from 'react'
import logo1 from '../assets/logo1.png'
import app from '../assets/pay/app.jpg'
import play from '../assets/pay/play.jpg'
import pay from '../assets/pay/pay.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CardPanelContext } from "../context/cartPanel.jsx";

function Footer() {
  const navigate =useNavigate()

  const { togglePanel } = useContext(CardPanelContext);

  const textVariants = {
    hidden: { opacity: 0, y:50},
    visible:{opacity: 1, y:0, transition:{duration:0.5,delay:0.3}}
  }

  return (
    <div id='footer' className='pt-2 sm:pt-4 pb-2 border-t border-gray-700 text-sm tracking-widest bg-gray-200'>
    <div onClick={()=>window.scrollTo({top: 0,behavior:'smooth'})} className='ml-2 sm:ml-14 mb-2'>
      <img loading='lazy' className='w-8 mb-2  inline-block' src={logo1} alt="" /><span className='font-bold text-xl'>NextGen</span>
    </div>
    <motion.div id='footerDiv' initial='hidden' whileInView='visible' variants={textVariants} className='px-5 font-quicksand sm:px-16 grid grid-cols-2 sm:grid-cols-4 sm:pb-10 gap-2 sm:gap-5'>
      <div>
        <div className='flex flex-col gap-1'>
          <span className='mb-1 text-base sm:text-lg font-bold'>Contact</span>
          <p className='md:text-sm'><span className='font-bold'>Address:</span> 535/15, Azad Nagar, Raebareli</p>
          <p className='md:text-sm'><span className='font-bold'>Phone:</span> (+91) 78603 68175/ (+91) 97953 72555</p>
          <p className='md:text-sm'><span className='font-bold'>Hours:</span> 10:00 - 18:00, Mon - Sat</p>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='mb-1 text-base sm:text-lg font-bold'>About</span>
        <p onClick={()=>navigate('/about')} className='md:text-sm'>About us</p>
        <p onClick={()=>navigate('/shipping-delivery')} className='md:text-sm'>Delivery Information</p>
        <p onClick={()=>navigate('/privacy-policy')} className='md:text-sm'>Privacy Policy</p>
        <p onClick={()=>navigate('/terms-conditions')} className='md:text-sm'>Terms & Conditions</p>
        <p onClick={()=>navigate('/return-policy')} className='md:text-sm'>Return Policy</p>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='mb-1 text-base sm:text-lg font-bold'>My Account</span>
        <p onClick={()=>navigate('/signup')} className='md:text-sm'>Sign Up</p>
        <p onClick={togglePanel} className='md:text-sm cart'>View Cart</p>
        <p onClick={()=>navigate('/profile')} className='md:text-sm'>My Profile</p>
        <p className='md:text-sm'>See More</p>
        <p onClick={()=>navigate('/herby')} className='md:text-sm'>Help</p>
      </div>
      <div className='flex flex-col gap-1'>
      <span className='mb-1 text-base sm:text-lg font-bold'>Install App</span>
      <span className='md:text-sm'>From App Store or Google Play</span>
      <div className='-ml-5 sm:flex mix-blend-multiply'>
        <a className='w-full cursor-pointer' href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><img loading='lazy' src={app} alt="img" /></a>
        <a className='w-full cursor-pointer' href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"><img loading='lazy' src={play} alt="img" /></a>
      </div>
      <a href="https://www.mastercard.us/" target="_blank" rel="noopener noreferrer"><img loading='lazy' className='mix-blend-multiply cursor-pointer sm:mt-2 sm:ml-2' src={pay} alt="pay" /></a>
      </div>
    </motion.div>
    <div className='md:text-sm flex justify-center mb-1 mt-4 font-semibold'>
      All rights reserved. Copyright © 2024 - NextGen!
    </div>
    </div>
  )
}

export default Footer