import { lazy,Suspense } from 'react'
const About=lazy(()=>import('../components/About'));

function AboutPage() {
  return (
    <Suspense fallback=''>
    <About/>
    </Suspense>
  )
}

export default AboutPage