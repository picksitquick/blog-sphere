// "use client";
import Image from 'rc-image'
import Link from 'next/link';
import React from "react";


interface BlogCardProps {
  blog:{
      id: number;
      title: string;
      content: string;
      author: string;
      date: string;
      img: string;
      link: string;
      category: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) =>
 {
  return (
    <div className='bg-violet-50 w-5/6 h-96 shadow-xl'>
        <div className='text-gray-800 py-2 px-4 text-xl font-mono'>{blog.title}</div>
       <div className='m-auto'>
        <Link href={blog.link}>
        <Image className='w-full h-full object-cover rounded-ig ml-4'
             src={blog.img}
             alt="Blogsphere"
             width={450}
             height={250}
             />
        </Link>
        <div className='text-gray-700 py-1 px-5 text-sm font-mono flex flex-row gap-4'>
            <div>{blog.author}</div>
            <div>.</div>
            <div>{blog.date}</div>
            <div>.</div>
            <div>{blog.category}</div>
            
        </div>
        <div className='text-gray-500 py-2 px-5 text-sm font-mono'>
            {blog.content}
        </div>
      </div>
    </div>
  )
}

export default BlogCard;