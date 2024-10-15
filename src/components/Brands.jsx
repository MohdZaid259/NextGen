import b1 from '../assets/brands/b1.png'
import b2 from '../assets/brands/b2.png'
import b3 from '../assets/brands/b3.png'
import b4 from '../assets/brands/b4.png'
import b5 from '../assets/brands/b5.png'
import b6 from '../assets/brands/b6.png'
import b7 from '../assets/brands/b7.png'
import b8 from '../assets/brands/b8.png'
import {motion} from 'framer-motion'

let list=[ b1,b2,b3,b4,b5,b6,b7,b8]

function Brands() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.3}} className='font-bold font-quicksand text-2xl ml-5 sm:ml-12 mt-3 sm:mt-5'>Our Sponsers:</motion.p>
        <marquee direction="left" className='flex py-5'>
        {
          list.map((item,id)=><img loading='lazy' key={id} className='h-20 mx-5 inline object-contain aspect-video' src={item} alt='brand'/>)
        }
        </marquee>
      </div>
    </>
  )
}

export default Brands