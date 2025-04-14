import pro2 from '../../assets/product/pro2.png'
import video from '../../assets/product/video.mp4'
import {motion} from 'framer-motion'

function ProBanner() {
  return (
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 mt-2 mx-3 sm:my-10 justify-center overflow-x-hidden'>
    <motion.video loading='lazy' initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className='w-full sm:w-5/12 rounded-md' controls muted autoPlay loop playsInline>
      <source src={video} type="video/mp4"/>
    </motion.video>
    <motion.img loading='lazy' initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className='w-full sm:w-5/12 rounded-md' src={pro2} alt="" />
    </div>
  )
}

export default ProBanner