import { lazy,Suspense } from 'react'
const Soap=lazy(()=>import('../components/Soap'));
const Juice=lazy(()=>import('../components/Juice'));
const Oil=lazy(()=>import('../components/Oil'));
const Banner=lazy(()=>import('../components/Banner'));
const ProBanner=lazy(()=>import('../components/ProBanner'));
import HashLoader from "react-spinners/HashLoader";

function ProductPage() {
  return (
    <Suspense fallback={
      <div className='h-screen flex justify-center items-center'>
          <HashLoader
            size={50}
            color='green'
          />
        </div>
    }>
      <Banner/>
      <Juice/>
      <Oil/>
      <ProBanner/>
      <Soap/>
    </Suspense>
  )
}

export default ProductPage