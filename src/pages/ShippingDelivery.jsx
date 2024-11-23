import { lazy,Suspense } from 'react'
const ShippingDeliveryComp = lazy(async () => {
  const module = await import('../assets/shippingDelivery.js');
  return { default: module.ShippingDeliveryComp };
});

function ShippingDelivery() {
  return (
    <Suspense fallback=''>
      <ShippingDeliveryComp />
    </Suspense>
  )
}

export default ShippingDelivery;