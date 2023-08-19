'use client'

import React, { useEffect, useState } from 'react';
import { useRouter , useSearchParams } from 'next/navigation';
import { ImSearch } from "react-icons/im"
import BlogCard from '../components/blogFormat';
import {BlogsData} from '@/app/helpers/blogData';


const Search: React.FC = () =>{

    const [searchValue, setSearchValue] = useState('');//initial value 
    const [searchSuggestions , setSearchSuggestions] = useState<string[]>([]);//actual param, setter

    const route = useRouter();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toString();
        setSearchValue(query);
        performSearch(query);
    };
    
    const onSearching = () => {
        route.push(`/result?query=${encodeURIComponent(searchValue)}`);
        // route.push('/');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
        const button = document.getElementById('search-button');
        if(button){
            button.click();
        }
        }
    }


    const navigateToNewPage = () => {
        route.push(`/result?query=${encodeURIComponent(searchValue)}`); 
    }

    const [searchResults, setSearchResults] = useState(BlogsData); // Initialize with all blogs

    const searchParams = useSearchParams(); 
    const query = searchParams.get('query');

    const performSearch = (searchQuery: string) => {
        const filteredBlogs = BlogsData.filter((blog) => {
            const titleMatches = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
            const contentMatches = blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
            if(searchQuery.length === 0 || searchQuery === ' ')return null;
            else {
                return titleMatches || contentMatches;
            }
        }
        );
        if (filteredBlogs.length > 0) {
            setSearchSuggestions(filteredBlogs.map((blog) => blog.title));
          } else {
            setSearchSuggestions(['No matches found']);
          }
        setSearchResults(filteredBlogs);
      };

      useEffect(() => {
        if (query && query.trim() !== '') {
          performSearch(query as string);
        }
        else{
            setSearchSuggestions([]);
        }
      }, [query]);

      const PAGE_LIMIT = 5;
  const [currentPage , setCurrentPage] = useState(1);//initial value
  const totalPages = Math.ceil(searchResults.length / PAGE_LIMIT);
  const paginatedBlogs = searchResults.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT);

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

    const [selectedCategory, setSelectedCategory] = useState("");

    const navigateToCategoryPage = () => {
        if (selectedCategory) {
            route.push(`/category/${selectedCategory}`);
            }
    };


    return(
        <main>
            <div className="flex justify-between mt-4">
                <div className='py-2 px-2 flex flex-row gap-5'>
                    <div className='text-start ml-0'>
                        <input type="text" 
                            className="block mt-6 w-52 h-9 px-1 py-2 bg-violet-200 border border-slate-400 rounded-full text-sm  shadow-2xl placeholder-zinc-900  focus:text-zinc-900" 
                            placeholder='Search... '
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}/>
                    </div>
                {/* <span className='text-slate-700 text-2xl py-8'> */}
                    <button
                        className='text-slate-700 text-2xl py-8'
                        onClick={navigateToNewPage}>
                        <ImSearch/> 
                    </button>                     
                {/* </span> */}
            </div>
            {/* <div>
                {searchSuggestions.length > 0 && (
                    <ul className="absolute z-10 mt-2 bg-emerald-300 border border-gray-300 rounded-lg shadow-lg">
                        {searchSuggestions.map((suggestion, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-emerald-400 rounded-lg"
                              onClick={() => setSearchValue(suggestion)}
                            >
                            {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
              </div> */}
            </div>
        </main>
    );
};

export default Search;