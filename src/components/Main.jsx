import React, { useState , useEffect } from 'react'
import api from '../Api'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get(api.apiPopular).then((response)=>{
      setMovies(response.data)
        })
    }, [])
    console.log(movies)

  return (
    <div>Main</div>
  )
}

export default Main;