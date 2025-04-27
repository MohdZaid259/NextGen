import {useState, useRef, useEffect } from 'react' 
import {Mail,MapPin, Clock, Phone } from 'lucide-react';
import {motion} from 'framer-motion'
import HashLoader from "react-spinners/HashLoader";

let list=[
  {
    Icon:MapPin,
    desc:'578/D Azad Nagar, Raebareli, Uttar Pradesh, India'
  },
  {
    Icon:Phone,
    desc:'+01 2222 365 / (+91) 01 2345 6789'
  },
  {
    Icon:Mail,
    desc:'nextGen@example.com'
  },
  {
    Icon:Clock,
    desc:'Monday to Saturday: 9.00am to 16.00pm'
  },
]

function Contact() {
  const [loading,setLoading] = useState(true)
  const iframeRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, x:-50},
    visible:{ opacity: 1, x:0, transition:{duration:0.5}}
  }
  const mapVariants = {
    hidden: { opacity: 0, x:100},
    visible:{ opacity: 1, x:0, transition:{duration:0.5}}
  }

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => setLoading(false);
    }
  }, []);

  return (
    <div className='md:flex justify-around'>
        <motion.div initial='hidden' whileInView='visible' variants={textVariants} className='flex mt-[60px] sm:mt-20 ml-3 md:ml-10 md:pb-20 pt-10 flex-col gap-2 justify-center '>
          <p>GET IN TOUCH</p>
          <p className='font-bold font-quicksand mb-2 text-xl sm:text-2xl'>Visit one of our agency locations or contact us today</p>
          <p className='font-quicksand text-base font-semibold'>Head Office</p>
          {list.map((item,id)=>{
            const Icon = item.Icon;
            return (
              <div key={id}>
                <Icon className='sm:w-6 w-4 inline-block mr-4' />
                <span className='font-quicksand'>{item.desc}</span><br />
              </div>
            )
          })}
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={mapVariants} className='my-5 m-auto w-11/12 md:w-auto sm:mt-24 border-2 border-black rounded-md overflow-x-hidden'>
        {loading && <div className='w-full h-full flex justify-center items-center'><HashLoader className='' size={50} color='green'/></div>}
        <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18112.122944024537!2d81.23303673102927!3d26.236050082422114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba14166f655d1%3A0x24dffd072d377f70!2sRaebareli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722494656513!5m2!1sen!2sin" ref={iframeRef} width="600" height="350" referrerPolicy="no-referrer-when-downgrade" />
        </motion.div>
    </div>
  )
}

export default Contact