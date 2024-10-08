import React from 'react'
import Avocado from '../assets/oils/Avocado.png' 
import Cedarwood from '../assets/oils/Cedarwood.png' 
import coconut from '../assets/oils/coconut.png' 
import eucalyptus from '../assets/oils/eucalyptus.png' 
import Frankincense from '../assets/oils/Frankincense.png' 
import lavoil from '../assets/oils/lavoil.png' 
import olive from '../assets/oils/olive.png' 
import Peppermint from '../assets/oils/Peppermint.png' 
import rosemary from '../assets/oils/rosemary.png' 
import sunflower from '../assets/oils/sunflower.png' 
import {motion} from 'framer-motion'
import ProCard from './ProCard'
import link from '../assets/icons/link.png'
import { useNavigate } from 'react-router-dom'

function Juice() {
  const navigate=useNavigate()

  const heading ={
    hidden:{opacity:0,scale:0},
    visible:{opacity:1,scale:1,transition:{delay:0.5, duration:0.5}}
  }
  const oil = [
    {
      title:'Avocado oil',
      image:Avocado,
      price:'49.00'
    },
    {
      title:'Cedarwood oil',
      image:Cedarwood,
      price:"19.00"
    },
    {
      title:'Coconut oil',
      image:coconut,
      price:'19.00'
    },
    {
      title:'Frankincense oil',
      image:Frankincense,
      price:'39.00'
    },
    {
      title:'Eucalyptus oil',
      image:eucalyptus,
      price:'49.00'
    },
    {
      title:'Lavoil oil',
      image:lavoil,
      price:"29.00"
    },
    {
      title:'Olive oil',
      image:olive,
      price:'19.00'
    },
    {
      title:'Peppermint oil',
      image:Peppermint,
      price:'39.00'
    },
    {
      title:'Rosemary oil',
      image:rosemary,
      price:'29.00'
    },
    {
      title:'Sunflower oil',
      image:sunflower,
      price:"21.00"
    },
  ]

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.2,delay:0.2}} className='sm:text-3xl my-4 text-2xl sm:my-10 font-semibold flex justify-center'>Herbel Oils</motion.h1>
      <div className='mx-2 sm:mx-5 md:mx-10 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5'>
      {oil.map((item,key)=>(
        <ProCard className='flex-shrink-0 w-fit' key={key} image={item.image} title={item.title} price={item.price}/>
      ))}
      </div>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5}} onClick={()=>navigate('/')} className='hover:underline cursor-pointer text-blue-600 font-serif text-base sm:text-lg my-3 sm:my-5 flex justify-center'><img loading='lazy' className='w-4 h-4 mr-2 mt-[3px] sm:mt-[6px]' src={link} alt="link" />Explore &gt;&gt;</motion.span>
    </>
  )
}

export default Juice