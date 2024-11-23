import { lazy,Suspense } from 'react'
// const ReturnPolicyComp = lazy(async () => {
//   const module = await import('../assets/returnPolicy.js');
//   return { default: module.ReturnPolicyComp };
// });

// Lazy load with async function
const ReturnPolicyComp = lazy(async () => {
  const module = await import('../assets/returnPolicy.js');

  // Ensure 'ReturnPolicyComp' exists and is a valid React component
  if (!module.ReturnPolicyComp || typeof module.ReturnPolicyComp !== 'function') {
    throw new Error("ReturnPolicyComp is not a valid React component or is not exported correctly.");
  }

  return { default: module.ReturnPolicyComp }; // Map named export to default
});

function ReturnPolicy() {
  return (
    <Suspense fallback=''>
      <ReturnPolicyComp />
    </Suspense>
  )
}

export default ReturnPolicy;
