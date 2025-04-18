import { lazy,Suspense } from 'react'
const Contact=lazy(()=>import('../components/contact/Contact'));
const Brands=lazy(()=>import('../components/contact/Brands'));
import HashLoader from "react-spinners/HashLoader";

function ContactPage() {
  return (
    <Suspense fallback={
    <div className='h-screen flex justify-center items-center'>
      <HashLoader
        size={50}
        color='green'
      />
    </div>}>
      <Contact/>
      <Brands/>
    </Suspense>
  )
}

export default ContactPage