import React, { useState } from 'react'  
import {searchMovie} from '../requests' 


const Navbar = ({setMovies}) => {
    const [search, setSearch] = useState('');
    const handleSearch = (e)=> {
        e.preventDefault();
        if(search.trim()===''){
            alert('Please enter a movie')
            return;
        }       
        
        searchMovie(search)
        .then((movies)=>setMovies(movies.results))
        .catch((error) => console.log("error", error));
        setSearch('')
        
        
    }
    return (
    <div className='flex items-center gap-8 justify-center md:justify-between p-4 z-[100] w-full  flex-wrap'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>   
        <div>
        <form className="flex gap-2" action="/" method="get" onSubmit={handleSearch}>
        <label htmlFor="header-search">            
        </label>        
        <input type="text" id="header-search" value={search} onChange={(e)=> setSearch(e.target.value)} className=' bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' placeholder="Movies, Series..." name="s"   />
        <button type="submit" className=' bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</button>        
    </form>
        </div>     
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
    )
}

export default Navbar