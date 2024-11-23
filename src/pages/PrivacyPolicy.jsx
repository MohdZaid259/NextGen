import { lazy,Suspense } from 'react'
const PrivacyPolicyComp = lazy(async () => {
  const module = await import('../assets/privacyPolicy.js');
  return { default: module.PrivacyPolicyComp };
});

function PrivacyPolicy() {
  return (
    <Suspense fallback=''>
      <PrivacyPolicyComp />
    </Suspense>
  )
}

export default PrivacyPolicy;
