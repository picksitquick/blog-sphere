'use client'
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogsData } from "@/app/helpers/blogData";
import { Categories } from "@/app/helpers/categories";
import BlogCard from "@/app/component/blogFormat";
import Link from "next/link";

const Topic = () => {
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
        <main className="min-h-screen bg-rose-200">
            <div className="bg-violet-100 text-white flex justify-center h-20">
                <div className="my-auto bg-green-300 p-2 rounded-full hover:bg-green-400"><Link href={'/search'}>Home</Link></div>
            </div>
            <div>
                {filteredBlogs.map((blog)=>(
                    <BlogCard key={blog.id} blog={blog}/>
                ))}
            </div>
        </main>
    );
}

export default Topic;