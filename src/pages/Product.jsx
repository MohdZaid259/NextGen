import { lazy,Suspense } from 'react'
const Soap=lazy(()=>import('../components/product/Soap'));
const Juice=lazy(()=>import('../components/product/Juice'));
const Oil=lazy(()=>import('../components/product/Oil'));
const Banner=lazy(()=>import('../components/product/Banner'));
const ProBanner=lazy(()=>import('../components/product/ProBanner'));
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