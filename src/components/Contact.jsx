import React from 'react'
import live from '../assets/icons/live.png'
import time from '../assets/icons/time.png'
import call from '../assets/icons/call.png'
import email from '../assets/icons/email.png'
import {motion} from 'framer-motion'

let list=[
  {
    img:live,
    desc:'578/D Azad Nagar, Raebareli, UttarPradesh, India'
  },
  {
    img:call,
    desc:'+01 2222 365 / (+91) 01 2345 6789'
  },
  {
    img:email,
    desc:'nextGen@example.com'
  },
  {
    img:time,
    desc:'Monday to Saturday: 9.00am to 16.00pm'
  },
]
function Contact() {
  const textVariants = {
    hidden: { opacity: 0, x:-50},
    visible:{ opacity: 1, x:0, transition:{duration:0.5}}
  }
  const mapVariants = {
    hidden: { opacity: 0, x:100},
    visible:{ opacity: 1, x:0, transition:{duration:0.5}}
  }

  return (
    <div className='md:flex justify-around'>
        <motion.div initial='hidden' whileInView='visible' variants={textVariants} className='flex mt-[60px] sm:mt-20 ml-3 md:ml-10 md:pb-20 pt-10 flex-col gap-2 justify-center '>
          <p>GET IN TOUCH</p>
          <p className='font-bold mb-2 text-xl sm:text-2xl'>Visit one of our agency locations or contact us today</p>
          <p className='text-base font-semibold'>Head Office</p>
          {list.map((item,id)=>{
            return (
              <div key={id}>
                <img loading='lazy' className='sm:w-6 w-4 inline-block mr-2' src={item.img} alt="" />
                <span>{item.desc}</span><br />
              </div>
            )
          })}
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={mapVariants} className=' mt-10 sm:mt-24  rounded-md overflow-x-hidden'>
          <iframe className='rounded-md border-2 border-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18112.122944024537!2d81.23303673102927!3d26.236050082422114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba14166f655d1%3A0x24dffd072d377f70!2sRaebareli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722494656513!5m2!1sen!2sin" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </motion.div>
    </div>
  )
}

export default Contact