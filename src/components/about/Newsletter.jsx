import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function Newsletter() {
  const navigate=useNavigate()
  return (
    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}} className='flex mt-16 flex-col sm:flex-row gap-3 justify-between md:justify-around items-center px-3 sm:px-20 bg-red-500 py-5 sm:py-14' id='newsletter'>
      <div className=''>
        <div className='font-bold text-xl sm:text-2xl text-white'>Sign Up For newsletters</div>
        <div className='text-white text-sm'>Get E-mail updates about our latest shop and <span onClick={()=>navigate('/')} className='cursor-pointer text-yellow-400 font-semibold underline'>special offers</span>.</div>
      </div>
      <div className='flex'>
        <input className='py-1 sm:py-2 w-auto lg:w-[300px] sm:px-4 px-2 text-lg outline-none rounded-l-md' type="text" placeholder='Your email address' />
        <button className='bg-teal-600 text-white sm:px-4 text-base sm:text-lg p-2 rounded-r-md'>SignUp</button>
      </div>
    </motion.div>
  )
}

export default Newsletter