import { Button } from 'antd'
import React from 'react'
import { ImSearch } from "react-icons/im"
import Logo from '../components/logo' 
import Link from 'next/link'
import SearchBar from '../components/searchbar'
export default function Name(){
    return(
        <div className='bg-purple-200 h-24 flex flex-row'>
            <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
            <SearchBar/>
            
            <div className=' py-2'>
                <Logo/>
            </div>
            <div className='py-10  text-zinc-900 flex flex-row gap-5'>
                <Link href={"/"} className=" hover:text-gray-500">Log in</Link>
                <div>|</div>
                <Link href={"/"} className=" hover:text-gray-500">Sign up</Link>
            </div>
            </div>
        </div>
    )
}