import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
        <img
          className="w-full h-auto block "
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt={item.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <h1 className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item.title}
          </h1>
          <div onClick={saveShow} className="absolute  top-0 left-0 p-4">
            {like ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
