import { lazy,Suspense } from 'react'
const Soap=lazy(()=>import('../components/Soap'));
const Juice=lazy(()=>import('../components/Juice'));
const Oil=lazy(()=>import('../components/Oil'));
const Banner=lazy(()=>import('../components/Banner'));
const ProBanner=lazy(()=>import('../components/ProBanner'));

function ProductPage() {
  return (
    <Suspense fallback=''>
      <Banner/>
      <Juice/>
      <Oil/>
      <ProBanner/>
      <Soap/>
    </Suspense>
  )
}

export default ProductPage