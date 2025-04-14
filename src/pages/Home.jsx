import { lazy,Suspense } from 'react'
const Hero=lazy(()=>import('../components/home/Hero'));
const Card=lazy(()=>import('../components/home/Card'));
const Services=lazy(()=>import('../components/home/Services'));
const Product=lazy(()=>import('../components/home/Product'));
import HashLoader from "react-spinners/HashLoader";

function Home() {
  return (
    <Suspense fallback={
      <div className='h-screen flex justify-center items-center'>
          <HashLoader
            size={50}
            color='green'
          />
        </div>
    }>
      <Hero/>
      <Card/>
      <Services/>
      <Product/>
    </Suspense>
  )
}

export default Home