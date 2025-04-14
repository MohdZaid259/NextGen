import { motion} from 'framer-motion'

function Services() {
  const textVariants = {
    hidden: { opacity: 0, y:-50},
    visible: { opacity: 1, y:0, transition:{delay:0.5, duration:0.5}}
  }

  return (
    <motion.div initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='flex justify-center my-4 sm:my-10 flex-col items-center'>
      <span className='text-sm md:text-base text-green-700 font-semibold'>Authenticy certified!</span>
      <span className='text-xl md:text-3xl tracking-widest font-semibold'>100% HERBAL</span>
    </motion.div>
  )
}

export default Services