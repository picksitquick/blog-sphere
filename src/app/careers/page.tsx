import React from 'react'
import Name from '../components/name'
import Header from '../components/header'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'checking',
  description: 'abcd',
}


function page() {
  return (
    <div>
        <Name/>
        <Header/>
    </div>
  )
}

export default page