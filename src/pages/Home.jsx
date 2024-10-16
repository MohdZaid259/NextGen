import { lazy,Suspense } from 'react'
const Hero=lazy(()=>import('../components/Hero'));
const Card=lazy(()=>import('../components/Card'));
const Services=lazy(()=>import('../components/Services'));
const Product=lazy(()=>import('../components/Product'));

function Home() {
  return (
    <Suspense fallback=''>
      <Hero/>
      <Card/>
      <Services/>
      <Product/>
    </Suspense>
  )
}

export default Home