import React from 'react'
import Image from "next/image"

export default function section1() {
  return (
    
        <div className="grid md:grid-cols-2">
            <div className="image">
            <Image src={"/img1.jpg"} alt="sample" width={500} height={300} />
            </div>
            <div className="info">

            </div>
        </div>

  )
}