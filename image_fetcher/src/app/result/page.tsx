"use client"

import React, { useEffect, useState } from 'react';
import { useRouter , useSearchParams } from 'next/navigation';
// import BlogCard from '../component/blogFormat';
import BlogCard from '../component/blogFormat';
import {BlogsData} from '@/app/helpers/blogData';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

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
  // const receive = await fetch(get,'test_url');
  // slice-->(starting idx , ending idx)-> (0,5)->0,1,2,3,4
  // (0,10): at 1st: (0,5) -> 0,1,2,3,4
  // at 2nd stage: (5,10) ->5,6,7,8,9 

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
            <AppBar position="sticky" color='primary'>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BlogSphere
            </Typography>
            <div>
                <InputBase
                className='bg-white p-2 rounded-full'
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                autoComplete="true"
                value={searchValue}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                />
                <button id='search-button' 
                    className='bg-orange-300 hover:bg-orange-500 rounded-3xl p-2 ml-2'
                    onClick={onSearching}
                    >
                    <SearchIcon />
                </button>
                <div>
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
                </div>
            </div>
            {/* Add other links here */}
            </Toolbar>
            </AppBar>
        </div>
            <h1 className='bg-gray-300 p-2'>Search Results for {query}</h1>
            <div> 
                {paginatedBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog}/>
                    // <link src />
                ))}
            </div>
        <div className='flex justify-center mt-4'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 hover:bg-green-400 bg-blue-500 text-white rounded-lg mr-2'>
                Prev</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 hover:bg-green-400 bg-blue-500 text-white rounded-lg mr-2'>
                Next</button>
        </div>
    </div>
  );
};

export default SearchResults;