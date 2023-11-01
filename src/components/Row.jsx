import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ rowID, fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  const slideLeft = () => {
    document.getElementById("slider" + rowID).scrollLeft -= 500;
  };

  const slideRight = () => {
    document.getElementById("slider" + rowID).scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />

        <div
          id={"slider" + rowID}
          className="w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative overflow-x-hidden "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
