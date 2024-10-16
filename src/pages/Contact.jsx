import { lazy,Suspense } from 'react'
const Contact=lazy(()=>import('../components/Contact'));
const Brands=lazy(()=>import('../components/Brands'));

function ContactPage() {
  return (
    <Suspense fallback=''>
      <Contact/>
      <Brands/>
    </Suspense>
  )
}

export default ContactPage