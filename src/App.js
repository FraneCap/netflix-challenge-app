
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";


  


function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies)
  return (
    <>
    <Navbar setMovies={setMovies} />  
    <div className='movies-container'>
    {movies.length>0 ? (
    movies.map((movie)=>{      
      return (
        <div className="flex flex-col justify center place-items-center relative" key={movie.id}>
          <div className= 'titulo text-white font-bold opacity-0 transition-all hover:opacity-100 w-full h-full absolute'>        
          <h2 >{movie.title}</h2>  
          <h2 >{movie.description}</h2>  
          </div>
          <img src={movie.image} alt={movie.title}/>
        </div>
        
      )
    }
    )):'no hay datos'}
    </div>
    </>
    
  );
}


export default App;
