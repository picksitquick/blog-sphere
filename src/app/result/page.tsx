"use client"

import React, { useEffect, useState } from 'react';
import { useRouter , useSearchParams } from 'next/navigation';
// import BlogCard from '../component/blogFormat';
import BlogCard from '../components/blogFormat';
import {BlogsData} from '@/app/helpers/blogData';
import Name from '../components/name'
import Header from '../components/header'

const SearchResults: React.FC = () => {

  const [searchValue, setSearchValue] = useState('');
  const [searchSuggestions , setSearchSuggestions] = useState<string[]>([]);
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

  const [searchResults, setSearchResults] = useState(BlogsData); // Initialize with all blogs
  
//   const router = useRouter();
/**using useRouter from next/router is not longer supported for page navs, use next/navigation 
 * now to get query in useRouter we used to do router.query directly but now you need to use
 * useSearchParams which automatically fetches params in url.
 */
  const searchParams = useSearchParams(); 
  const query = searchParams.get('query');

  // Function to perform the search and set the search results
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
        setSearchSuggestions(filteredBlogs.map((blog) => blog.category));
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

  const PAGE_LIMIT = 4;
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

  return (
    <div>
        <div>
            <Name/>
            <Header/>
              
           
        </div>
        <div className='bg-violet-200 m-20 ml-56 h-16 w-1/2 text-gray-800 m-0 shadow-xl'>
            <div className='inline-block align-text-bottom text-xl m-5 font-mono'>
            Search Results for {query} ....
            </div>
          </div>
        
        <div> 
            {paginatedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog}/>
                // <link src />
            ))}
        </div>
        <div className='flex justify-center mt-4 mb-48'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 hover:bg-violet-200 bg-slate-400 text-white rounded-lg mr-2'>
                Prev</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 hover:bg-violet-200 bg-slate-400 text-white rounded-lg mr-2'>
                Next</button>
        </div>
    </div>
  );
};

export default SearchResults;