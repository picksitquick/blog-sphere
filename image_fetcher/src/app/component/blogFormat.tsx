import React from "react";

interface BlogCardProps {
    blog:{
        id: number;
        title: string;
        content: string;
    };
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) =>{
    return(
        <main className="bg-rose-200 flex justify-center">
            <div className="p-6 bg-rose-200 border-y border-rose-300 rounded-sm w-9/12">
                <div className="bg-blue-400 p-2 rounded-xl w-full overflow-y-auto">
                    <h1 className="text-white font-semibold">{blog.title}</h1>
                    <p className="text-white">{blog.content}</p>
                </div>
            </div>
        </main>
    );
};

export default BlogCard;