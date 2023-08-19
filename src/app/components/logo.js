import React from 'react'

export default function logo() {
  return (
    <span>
    <div className='text-slate-700 bg-slate-50 border-solid border-2 border-zinc-900 h-20 w-80'>
        <div className=' flex flex-row'>
            <div className='bg-zinc-950 ml-2 mt-2 h-14 w-36'>
                <div className='text-slate-50 text-center tracking-widest text-3xl justify-center py-2 '>
                    BLOG
                </div>           
            </div>
            <div className='text-zinc-950 text-right tracking-widest text-3xl mr-2 ml-18 mt-2 h-14 w-36 py-2'>
                SPHERE
            </div>
        </div>
    </div>
    </span>
  )
}
