import { lazy,Suspense } from 'react'
const Order=lazy(()=>import('../components/Order'))
import HashLoader from "react-spinners/HashLoader"

function OrderPage() {
  return (
    <Suspense fallback={
      <div className='h-screen flex justify-center items-center'>
          <HashLoader
            size={50}
            color='green'
          />
        </div>
    }>
      <Order/>
    </Suspense>
  )
}

export default OrderPage