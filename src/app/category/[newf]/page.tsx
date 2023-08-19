'use client'
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogsData } from "@/app/helpers/blogData";
import { Categories } from "@/app/helpers/categories";
import BlogCard from "@/app/components/card2";
import Link from "next/link";
import Newsletter from "@/app/components/newsletter";
import Footer from "@/app/components/footer";
import Name from "@/app/components/name";
import Header from "@/app/components/header";


const Topic= () => {
    const page = usePathname();
    const param = page.substring(10);
    
    const category = Categories.find((cat) => cat.name === param);

    if(!category){
        console.log(param);
        return(<div>Coming soon....</div>);
    }

    const filteredBlogs = BlogsData.filter((blog)=>(
        blog.tags && category?.tags.includes(blog.tags.toLowerCase())
    ));

    return(
        <main>
            <Name/>
            <Header/>
            <div className="grid grid-cols-6 gap-6 m-20">
                <div className="col-span-4">
                    <div className='bg-violet-200 h-16 w-3/4 text-gray-800 m-0 shadow-xl'>
                        <div className='inline-block align-text-bottom text-xl m-5 font-mono'>
                            Category Results:
                        </div>
                    </div>
                    <div>
                        
                        {filteredBlogs.map((blog)=>(<div className="mt-20">
                        <BlogCard key={blog.id} blog={blog}/></div>))}
                        
                    </div>
                </div>
                <div className="col-span-2 text-left">
                    <div className='sticky top-10 left-0 right-0 bg-violet-200 w-auto h-160 w-80 shadow-xl'>
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
            <Newsletter/>
            <Footer/>
        </main>
    );
}

export default Topic;