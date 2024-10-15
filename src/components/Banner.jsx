import banner1 from '../assets/product/banner1.png'
import banner2 from '../assets/product/banner2.png'
import banner3 from '../assets/product/banner3.png'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

function Banner() {
  const navigate=useNavigate()

  return (
    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='mt-[60px]'>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide><img loading='lazy' onClick={()=>navigate('/')} src={banner1} className="cursor-pointer w-screen" alt="Banner"/></SwiperSlide>
      <SwiperSlide><img loading='lazy' onClick={()=>navigate('/')} src={banner2} className="cursor-pointer w-screen" alt="Banner"/></SwiperSlide>
      <SwiperSlide><img loading='lazy' onClick={()=>navigate('/')} src={banner3} className="cursor-pointer w-screen" alt="Banner"/></SwiperSlide>
    </Swiper>
    </motion.div>
  )
}
export default Banner