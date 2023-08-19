"use client";
import React from 'react'
import Image from 'rc-image'

export default function page() {
  return (
    <div>
      <section className="hidden">
        <div>Hello world!</div>
    </section>
    
    <section className="hidden">
        <div>hii</div>
        <p>This is me trying animations</p>
    </section>

    <section className="hidden">
        <h2>this is another heading</h2>
        <p>this is supposed to be a paragraph, hence why it will be repeated a bunch of times:
            this is supposed to be a paragraph
            this is suppos...
        </p>
    </section>

    <section className="hidden">
        <h2>did you like the paragraph?</h2>
        <div className="logos">
            <div className="logo hidden">
            <Image className='w-full h-full object-cover rounded-ig'
             src={"/Unknown.png"}
             alt="Blogsphere"
             width={50}
             height={50}
             />
            </div>
            <div className="logo hidden">
            <Image className='w-full h-full object-cover rounded-ig'
             src={"/Unknown.png"}
             alt="Blogsphere"
             width={50}
             height={50}
             />
            </div>
            <div className="logo hidden">
            <Image className='w-full h-full object-cover rounded-ig'
             src={"/Unknown.png"}
             alt="Blogsphere"
             width={50}
             height={50}
             />
            </div>
            <div className="logo hidden">
            <Image className='w-full h-full object-cover rounded-ig'
             src={"/Unknown.png"}
             alt="Blogsphere"
             width={50}
             height={50}
             />
            </div>

        </div>
    </section>
    </div>
  )
}
