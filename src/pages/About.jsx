import { lazy,Suspense } from 'react'
const About=lazy(()=>import('../components/About'));
import HashLoader from "react-spinners/HashLoader";

function AboutPage() {
  return (
    <Suspense fallback={
    <div className='h-screen flex justify-center items-center'>
      <HashLoader
        size={50}
        color='green'
      />
    </div>}>
    <About/>
    </Suspense>
  )
}

export default AboutPage