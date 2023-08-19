"use client";
import Header from '../components/header'
import Footer from '../components/footer'
import Name from '../components/name'
import Image from 'next/image'
import Newsletter from '../components/newsletter'
import Link from 'next/link'
import Card1 from '../components/card1'
import { useState } from 'react';
import {BlogsData} from '@/app/helpers/blogData';
import Head from 'next/head';


export default function Home(){
  const PAGE_LIMIT = 3;
  const [currentPage , setCurrentPage] = useState(1);//initial value
  const totalPages = Math.ceil(BlogsData.length / PAGE_LIMIT);
  const paginatedBlogs = BlogsData.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT);

  const handleNextPage = () => {
    if(currentPage < totalPages){
        setCurrentPage((nextPage) => nextPage + 1);
    }
  };

  const handlePrevPage = () => {
    if(currentPage > 1){
        setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  return(
    
    <div>
      <div className='shadow-2xl'>
        <Name />
      </div>
      <div className='shadow-2xl'>
        <Header />
      </div>
    
      <div className='m-auto'>
        <Image className='w-full h-full object-cover rounded-ig'
          src={"/Unknown.png"}
          alt="Blogsphere"
          width={100}
          height={750}
          />
      </div>
      

      <div className='m-20 bg-gray-300 w-auto h-48 text-center text-slate-50'>
          Ad Space
      </div>
      <div className="grid grid-cols-6 gap-6 m-20">
        <div>
          <div className="bg-gray-300 h-screen text-slate-50 text-center inline-block align-middle w-32">
            Ad Space
          </div>
          <div className="bg-gray-300 h-screen text-slate-50 text-center inline-block align-middle w-32 mt-5">
            Ad Space
          </div>
        </div>
        <div className="col-span-3">
          <div className='bg-violet-200 h-16 w-3/4 text-gray-800 m-0 shadow-xl'>
            <div className='inline-block align-text-bottom text-3xl m-5 font-mono'>
              Recent Posts...
            </div>
          </div>
          <div>
          {paginatedBlogs.map((blog) => (
                  <div className='mt-20'>
                    <Card1 key={blog.id} blog={blog}/>
                  </div>
                ))}
          </div>
          <div className='flex justify-center mt-4'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 hover:bg-violet-200 bg-slate-400 text-white rounded-lg mr-2'>
                Prev</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 hover:bg-violet-200 bg-slate-400 text-white rounded-lg mr-2'>
                Next</button>
          </div>
        </div>
        <div className="col-span-2">
          <div className='sticky top-10 left-0 right-0 bg-violet-200 w-auto h-160 shadow-xl'>
            <div className='transform: translateX(100%) transition: 1s'>
              <div className='font-mono text-xl text-gray-800 text-center py-10'>
                Browse by category
              </div>
              <div id="default-carousel" data-carousel="static" className='text-gray-800 flex flex-col text-center font-mono'>
                <div className='py-4'><Link href={'/category/All_about_5G'} className="hover:text-gray-500">All about 5G</Link></div>
                <div className='py-4'><Link href={'/category/Blockchain_and_Crypto'} className="hover:text-gray-500">Blockchain and Crypto</Link></div>
                <div className='py-4'><Link href={'/category/Artificial_Intelligence'} className="hover:text-gray-500">Artificial Intelligence</Link></div>
                <div className='py-4'><Link href={'/category/Cybersecurity'} className="hover:text-gray-500">Cybersecurity</Link></div>
                <div className='py-4'><Link href={'/category/Blockchain_and_Crypto'} className="hover:text-gray-500">Blockchain and Crypto</Link></div>
                <div className='py-4'><Link href={'/category/Artificial_Intelligence'} className="hover:text-gray-500">Artificial Intelligence</Link></div>
                <div className='py-4 mb-10'><Link href={'/category/Sample'} className="hover:text-gray-500">Sample</Link></div>
              </div>
            </div>
          </div>         
        </div>
      </div> 
      <Newsletter />
      <Footer />
    </div> 
  )
}