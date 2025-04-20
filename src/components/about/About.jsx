import about from '../../assets/about/about.png'
import about1 from '../../assets/about/about1.png'
import about2 from '../../assets/about/about2.png'
import about3 from '../../assets/about/about3.png'
import who from '../../assets/about/who.png'
import { SquareArrowOutUpRight } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'
import Newsletter from './Newsletter'
import {motion} from 'framer-motion'
import Counter from './Counter'

let list=[
  {
    img:about1,
    title:'In 1930, a young visionary by the name of Mr. M. Manal foresaw the benefits of herbal remedies while riding through the forests surrounding Dehradun, India.',
    desc:'After diligently researching the science of Ayurveda, he decided to dedicate his life to creating products that would improve people’s health and their lives and overall well-being.'
  },
  {
    img:about2,
    title:'Himalaya is one of the leading global health care brands. We have introduced many iconic products that have spread the promise of “Happiness through Wellness” in millions of homes around the globe.',
    desc:'Today, we are one of the most trusted herbal brands offering “head-to-heel” wellness solutions. We are committed to catering to the specific needs of our customers through innovative health care and personal care products.'
  },
  {
    img:about3,
    title:'Wellness in every Home and Happiness in every Heart.',
    desc:'Globally, Himalaya has brought a healing touch to over 100 countries. Today, our products like Liv.52 are endorsed by doctors worldwide, pointing to a need for herbal medicine. We have championed the belief that Ayurveda, when backed by modern science, provides holistic wellness solutions for people. From being a pharmaceutical company, we have emerged as a global herbal health and personal care organization with close to 500 products sold worldwide.'
  },
  {
    img:who,
    title:'In 1930, a young visionary by the name of Mr. M. Manal foresaw the benefits of herbal remedies while riding through the forests surrounding Dehradun, India.',
    desc:"After diligently researching the science of Ayurveda, he decided to dedicate his life to creating products that would improve people's health and their lives and overall well-being."
  }
]

function About() {
  const navigate=useNavigate()

  return (
    <div>
      <motion.img loading='lazy' initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='mt-[60px] ' src={about} alt="" />
      <Counter/>
      {list.map((item,id)=>{
        return ( 
            <div key={id} className={`flex flex-col md:flex-row items-center mt-5 px-3 sm:mx-5 md:mx-10 gap-3 md:gap-15 ${id%2==0?'md:flex-row-reverse':''} `}>
              <motion.img initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.3,delay:0.3}} className='border-1 border-emerald-600 w-1/3 md:w-1/4 rounded-xl' loading='lazy' src={item.img} alt="image" />
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3,delay:0.5}} className='flex flex-col justify-center items-center'>
                <p className='text-base font-nunito sm:text-xl font-semibold'>{item.title}</p>
                <p className='text-base font-nunito sm:text-lg'>{item.desc}</p>
              </motion.div>
            </div>
      )})}
      <Newsletter/>
    </div>
  )
}

export default About