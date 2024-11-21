import { lazy,Suspense } from 'react'
const Hero=lazy(()=>import('../components/Hero'));
const Card=lazy(()=>import('../components/Card'));
const Services=lazy(()=>import('../components/Services'));
const Product=lazy(()=>import('../components/Product'));
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