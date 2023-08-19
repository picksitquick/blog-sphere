import React from "react";
import Image from 'rc-image';
import Link from 'next/link';

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

const BlogCard: React.FC<BlogCardProps> = ({blog}) =>{
    return(
        <main className="px-10 flex justify-center">
            
            <div className=" w-2/3 ml-42 h-52">
                
                <div className="bg-violet-50 p-2 rounded-xl w-full overflow-y-auto shadow-xl ">
                    <div className="flex flex-row gap-4">
                    
                    <Link href={blog.link}>
                        <Image className='w-full h-full object-cover rounded-ig ml-4'
                            src={blog.img}
                            alt="Blogsphere"
                            width={100}
                            height={100}
                            />
                    </Link>
                        <div>
                            <h1 className='text-gray-800 py-2 px-4 text-xl font-mono'>{blog.title}</h1>
                            <p className="text-gray-500 py-2 px-5 text-sm font-mono">{blog.content}</p>
                            <div className='text-gray-700 py-1 px-5 text-sm font-mono flex flex-row gap-4'>
                                <div>{blog.author}</div>
                                <div>.</div>
                                <div>{blog.date}</div>
                                <div>.</div>
                                <div>{blog.category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogCard;