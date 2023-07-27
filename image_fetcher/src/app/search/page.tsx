'use client'

import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const Search: React.FC = () =>{

    const [searchValue, setSearchValue] = useState('');
    // whatever we type in into the input field it goes into searchValue
    const route = useRouter();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.toString());
    };

    const onSearching = () => {
        route.push(`/result?query=${encodeURIComponent(searchValue)}`);
        // route.push('/result?query=${name}');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
        const button = document.getElementById('search-button');
        if(button){
            button.click();
        }
        }
    }

    return(
        <main>
            <div className="bg-purple-300 h-20 border-4 border-purple-500 rounded-lg">
                <div className="flex justify-between mt-4">
                    <div className="rounded-full">
                        <input 
                            className="rounded-full p-2 mx-2 text-gray-600 outline-none hover:bg-red-200"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                        />
                        <button 
                            className="rounded-lg p-2"
                            onClick={onSearching}>
                            <SearchIcon/>
                        </button>
                    </div>
                    <div className="mr-10 my-auto font-bold">BLOGSPHERE</div>
                    <div className="mr-4 my-auto font-sans">login | SignUp</div>
                </div>
            </div>
            <div className=" bg-purple-400 h-16 border-2 border-purple-200 rounded-lg">
                <nav>
                    <ul className="flex justify-between mt-4 mx-4">
                        <li><Link href="/"><HomeIcon/>Home</Link></li>
                        <li><Link href="/">Category</Link></li>
                        <li><Link href="/"><WhatshotIcon/>Trending</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Social</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="bg-violet-300 min-h-screen rounded-md">
                <div className="text-white w-full bg-orange-400 h-96 rounded-lg">
                <h1 className="font-bold text-purple text-2xl">BLOGSPHERE</h1>
                    {/* <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={'/rac1.jpg'}
                        alt="BlogSphere"
                        // width={500}
                        // height={400}
                        layout="fill"
                        // objectFit="cover"
                    />     */}
                </div>
                <div className="">
                    {/* <Image 
                        src={"/rac2.jpg"}
                        alt="Somthing"
                        width={400}
                        height={200}
                    /> */}
                </div>
                <div className="">Ad</div>
                <div className="">Grid with Blog,Ad,Category</div>
            </div>
        </main>
    );
};

export default Search;