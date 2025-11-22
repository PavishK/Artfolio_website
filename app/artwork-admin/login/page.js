import Login from '@/components/Login'
import Spinner from '@/components/Spinner'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Login/>
    </Suspense>
  )
}

export default page