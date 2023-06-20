import React, { useState , useEffect } from 'react'
import api from '../Api'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])


    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=> {
        axios.get(api.apiPopular).then((response)=>{
      setMovies(response.data.results)
        })
    }, [])
    // console.log(movies)

const truncateString = (str, num) => {
  if(str?.length>num){
    return str.slice(0, num)+ '...'
  }else{
    return str;
  }
}

  return (
    <div className='text-white w-full h-full'>
    <div className='w-full h-full'>
    <div className='absolute w-full h-[550] bg-gradient-to-r from-black'>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt= {movies?.title}/>
      </div>
    </div>
    <div className='absolute w-full top-[18%] p-4 md:p-8'>
    <h1 className='text-white text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
    <div className='my-4'>
    <button className='text-indigo-600 border bg-white p-2 font-bold py-2 px-5 rounded'>Play</button>
    <button className='border bg-indigo-600 text-white font-bold p-2 rounded cursor-pointer py-2 px-5 ml-4'>Watch Later</button>
    <p className='text-gray-400 text-sm'>{movie?.release_date}</p>
    <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[20%] text-gray-200 '>{truncateString(movie?.overview, 100)}</p>
    </div>
    </div>
    </div>
  )
}

export default Main;