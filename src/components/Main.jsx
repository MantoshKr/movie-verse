import React, { useState } from "react";
import axios from "axios"; //import axios
import { useEffect } from "react"; //import useEffect
import api from "../Api";

const Main = () => {
  //usestate cant be called at the top level of the component so we have to call it inside the function

  const [movies, setMovies] = useState([]);

  const movie = Math.round(Math.random() * 20);

  useEffect(() => {
    axios
      .get(api.apiTrending)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const truncatestring = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movies[movie]?.backdrop_path}`}
        alt={movies.title}
        className="w-full h-[80vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          {movies[movie]?.title}
        </h1>
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Play
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
            Watch later
          </button>
        </div>
        <p className="text-white mt-4">
          Released : {movies[movie]?.release_date}
        </p>
        <p className="text-white mt-2">
          {truncatestring(movies[movie]?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
