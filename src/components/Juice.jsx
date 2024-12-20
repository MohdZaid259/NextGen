import {motion} from 'framer-motion'
import ProCard from './ProCard'
import link from '../assets/icons/link.png'
import { useNavigate } from 'react-router-dom'
import {juice} from './ProductData.js'
import { useSelector } from 'react-redux'

function Juice() {
  const navigate=useNavigate()
  const cartItem=useSelector(state=>state.cart.cartItems)

  const heading ={
    hidden:{opacity:0,scale:0},
    visible:{opacity:1,scale:1,transition:{delay:0.5, duration:0.5}}
  }
  
  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.2,delay:0.2}} className='sm:text-3xl my-4 text-2xl sm:my-7 font-semibold flex justify-center'>Herbel Juices</motion.h1>
      <div className='mx-2 sm:mx-5 md:mx-10 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5'>
      {juice.map((item,key)=>(
        <ProCard className={`flex-shrink-0 w-fit ${cartItem.find(i=>i.title==item.title)?'border-2 border-green-500':''} `} key={key} image={item.image} title={item.title} price={item.price}/>
      ))}
      </div>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5}} onClick={()=>navigate('/')} className='hover:underline cursor-pointer text-blue-600 font-serif text-base sm:text-lg my-3 sm:my-5 flex justify-center'><img loading='lazy' className='w-4 h-4 mr-2 mt-[3px] sm:mt-[6px]' src={link} alt="link" />Explore &gt;&gt;</motion.span>
    </>
  )
}

export default Juice