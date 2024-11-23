import { lazy,Suspense } from 'react'
const TermsConditionsComp = lazy(async () => {
  const module = await import('../assets/termsConditions.js');
  return { default: module.TermsConditionsComp };
});

function TermsConditions() {
  return (
    <Suspense fallback=''>
      <TermsConditionsComp />
    </Suspense>
  )
}

export default TermsConditions;
