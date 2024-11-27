import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate=useNavigate()

  const textVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
  }
  
  return (
    <div className='h-screen bg-cont'>
      <div className='relative py-40 sm:py-50 flex gap-2 flex-col justify-center px-5 sm:px-20'>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='text-4xl sm:text-5xl font-bold text-black tracking-wider'>Welcome to <p className='block sm:inline text-emerald-500'>NextGen</p></motion.span>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.55,delay:0.5}} className='text-2xl font-raleway pr-5 sm:text-3xl font-semibold text-black tracking-wide'>Your Trusted Source for Premium Herbal Products</motion.span>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.55,delay:1}}  className='text-lg sm:w-2/3 font-nunito text-black'>We believe in the power of nature to support your health and well-being. Our extensive range of herbal products is crafted with care, using only the finest ingredients sourced from around the world. <span className='hidden md:inline'> Whether you&apos;re seeking remedies for everyday ailments or looking to enhance your overall vitality, we have the perfect natural solution for you.</span></motion.span>
        <motion.button onClick={()=>navigate('product')} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:1.5}} className='rounded-full border-2 border-emerald-700 text-lg sm:text-xl font-semibold hover:bg-emerald-500 w-24 sm:w-32 px-3 py-1  hover:text-white tracking-wide'>Explore </motion.button>
      </div>
    </div>
  )
}

export default Hero