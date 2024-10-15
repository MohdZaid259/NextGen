import { motion } from 'framer-motion'
import CountUp from 'react-countup'

function Counter() {
  return (
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{ delay: 0.2, duration: 0.4 }} className='py-5 md:py-10 px-5 md:px-10 flex flex-col gap-2 sm:gap-8 md:flex-row justify-around items-center md:gap-5 bg-emerald-500'>
      <div className='text-center font-nunito'>
        <CountUp start={0} end={10} delay={1} duration={3} suffix="+" className='block text-3xl lg:text-5xl mb-1 md:mb-2 font-bold text-white'/>
        <span className='text-gray-100 text-xs md:text-base'>With years of expertise, NextGen crafts premium herbal products that combine the essence of nature with the power of wellness.</span>
      </div>
      <div className='text-center font-nunito'>
        <CountUp start={0} end={1200} delay={1} duration={3} suffix="+" className='block text-3xl lg:text-5xl mb-1 md:mb-2 font-bold text-white'/>
        <span className='text-gray-100 text-xs'>NextGen has created over 1200 unique herbal formulations, from rejuvenating teas to soothing balms, all crafted with precision and care.</span>
      </div>
      <div className='text-center font-nunito'>
        <CountUp start={0} end={800} delay={1} duration={3} suffix="+" className='block text-3xl lg:text-5xl mb-1 md:mb-2 font-bold text-white'/>
        <span className='text-gray-100 text-xs'>Our commitment to customer well-being ensures we deliver exceptional service and herbal products that surpass your expectations.</span>
      </div>
    </motion.div>
  )
}

export default Counter