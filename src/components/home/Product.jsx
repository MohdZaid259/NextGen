import aelo from '../../assets/home/aelo.jpeg'
import ashwa from '../../assets/home/ashwa.jpeg'
import neem from '../../assets/home/neem.jpg'
import turmeric from '../../assets/home/turmeric.jpg'
import bitter from '../../assets/home/bitter.jpeg'
import {motion} from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Product() {
  const navigate=useNavigate()

  const list = [
    {
      title:'Aloe Vera',
      image:aelo,
      desc:'Aloe vera is a succulent plant known for its thick, fleshy leaves filled with a gel-like substance. It is highly medicinal, primarily used externally to treat burns, wounds, and various skin conditions such as eczema and psoriasis.',
      desc2:' The gel of aloe vera contains compounds that have anti-inflammatory and soothing properties, making it effective for healing skin irritations and promoting wound healing.'
    },
    {
      title:'Ashwagandha',
      image:ashwa,
      desc:'Ashwagandha is an adaptogenic herb prominent in Ayurvedic medicine. It is known for its ability to help the body manage stress by reducing cortisol levels.',
      desc2:'Ashwagandha is also used to improve cognitive function, enhance stamina and endurance, and boost immunity. It is believed to have antioxidant properties that protect against cellular damage and support overall well-being.'
    },
    {
      title:'Neem',
      image:neem,
      desc:'Neem is a tree native to the Indian subcontinent, known for its medicinal properties. Nearly every part of the neem tree—leaves, bark, seeds, and oil—is used in traditional Ayurvedic medicine.',
      desc2:' Neem is revered for its potent antibacterial, antifungal, and antiviral properties, making it effective against various skin disorders like acne, eczema, and fungal infections.'
    },
    {
      title:'Turmeric',
      image:turmeric,
      desc:'Turmeric is a bright yellow spice commonly used in Indian cuisine and traditional medicine. It contains a compound called curcumin, which is known for its potent anti-inflammatory and antioxidant properties.',
      desc2:' Turmeric is used to alleviate joint pain and inflammation associated with arthritis. It also supports digestive health by stimulating bile production and may aid in managing conditions like irritable bowel syndrome (IBS).'
    },
    {
      title:'Bitter Gourd',
      image:bitter,
      desc:'The fruit is rich in vitamins and minerals, including vitamins A, C, and various B vitamins, as well as iron and potassium. It is particularly renowned for its ability to help manage blood sugar levels.',
      desc2:' Bitter melon contains compounds that mimic insulin, helping to lower blood glucose levels and improve glucose tolerance. This makes it a staple in the diets of many cultures for managing diabetes and related conditions.'
    }
  ]
  const textVariants = {
    hidden: { opacity: 0, x:-200},
    visible: { opacity: 1, x:0}
  }
  const textVariants1={
    hidden: { opacity: 0, x:200},
    visible: { opacity: 1, x:0}
  }

  return (
    <div className='overflow-x-hidden mb-10'>
      {list.map((item,key)=>(
        <motion.div initial='hidden' whileInView='visible' variants={key % 2 === 0 ? textVariants : textVariants1} transition={{duration:0.5,delay:0.5}} key={key} className={`my-3 sm:my-5 mx-2 md:mx-5 lg:mx-10 bg-gradient-to-r flex ${key%2==0?'flex-row-reverse rounded-l sm:rounded-r-full':'sm:rounded-l-full rounded-r'} from-emerald-400 to-white`}>
          <img loading='lazy' className='shadow-lg object-cover md:rounded-full rounded-md hidden sm:block aspect-[3/2] sm:w-48 lg:w-96' src={item.image} alt="product" />
          <div className='p-2 px-3 sm:p-5'>
            <p className='text-2xl sm:text-3xl md:text-4xl font-raleway pb-2 font-semibold'>{item.title}</p>
            <p className='text-base font-nunito sm:text-lg md:text-xl inline'>{item.desc}</p>
            <p className='hidden md:inline font-nunito text-base sm:text-lg md:text-xl'>{item.desc2}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Product