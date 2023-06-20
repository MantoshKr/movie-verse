import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import axios from 'axios';


const Row = ({title , fetchURL}) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies)


  return (
   
    <>
    <div className='text-white font-bold md:text-xl p-4'>
    {title}
    
    <div w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative>
    {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
    </div>
    </div>
    </>
  )
}

export default Row