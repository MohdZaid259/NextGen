import React from 'react'
import { Skeleton } from './ui/skeleton'

function SkeletonPage() {
  return (
    <div className='mx-2 mb-10 lg:mb-20 sm:mx-5 md:mx-10 flex sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 w-screen'>
    <div className={`bg-gray-100 border-2 w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <Skeleton className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' />
      <Skeleton className='text-lg py-1 font-semibold'></Skeleton>
      <Skeleton className='text-base font-nunito'></Skeleton>
      <Skeleton className='mt-2 bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'></Skeleton>
    </div>
    <div className={`bg-gray-100 border-2 w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <Skeleton className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' />
      <Skeleton className='text-lg py-1 font-semibold'></Skeleton>
      <Skeleton className='text-base font-nunito'></Skeleton>
      <Skeleton className='mt-2 bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'></Skeleton>
    </div>
    <div className={`bg-gray-100 border-2 w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <Skeleton className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' />
      <Skeleton className='text-lg py-1 font-semibold'></Skeleton>
      <Skeleton className='text-base font-nunito'></Skeleton>
      <Skeleton className='mt-2 bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'></Skeleton>
    </div>
    <div className={`bg-gray-100 border-2 w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <Skeleton className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' />
      <Skeleton className='text-lg py-1 font-semibold'></Skeleton>
      <Skeleton className='text-base font-nunito'></Skeleton>
      <Skeleton className='mt-2 bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'></Skeleton>
    </div>
    <div className={`bg-gray-100 border-2 w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <Skeleton className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' />
      <Skeleton className='text-lg py-1 font-semibold'></Skeleton>
      <Skeleton className='text-base font-nunito'></Skeleton>
      <Skeleton className='mt-2 bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'></Skeleton>
    </div>
    </div>
  )
}

export default SkeletonPage