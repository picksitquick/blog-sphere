import Image from 'next/image'
import Herosection from './component/testing'
import { motion } from 'framer-motion'
import Animate from './component/animate'

export default function Home() {
  return (
    <main className='bg-gray-800 min-h-screen'>
      <h1 className='text-white'>Working.....</h1>
      <Animate />
    </main>
  )
}
