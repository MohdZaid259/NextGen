import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import ProCard from './ProCard'
import { useSelector } from 'react-redux'
import { FirebaseContext } from '../../context/Firebase.jsx'

function Oil() {
  const [products, setProducts] = useState([])
  const { getAllProducts } = useContext(FirebaseContext)
  const cartItem=useSelector(state=>state.cart.cartItems)

  useEffect(()=>{
    (async () => {
      const res = await getAllProducts()
      const res2 = res.filter((item)=>(item.category == "Oils"))
      setProducts([...res2])
    })()
  },[])

  const heading ={
    hidden:{opacity:0,scale:0},
    visible:{opacity:1,scale:1,transition:{delay:0.5, duration:0.5}}
  }

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.2,delay:0.2}} className='sm:text-3xl my-4 text-2xl sm:my-7 font-semibold flex justify-center'>Herbel Oils</motion.h1>
      <div className='mx-2 mb-10 lg:mb-20 sm:mx-5 md:mx-10 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5'>
      {products.length>0 && products.map((item,key)=>(
        <ProCard className={`flex-shrink-0 w-fit ${cartItem.find(i=>i.title==item.name)?'border-2 border-green-500':''} `} key={key} image={item.image} title={item.name} price={item.price}/>
      ))}
      </div>
    </>
  )
}

export default Oil