import React from 'react'
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className='fixed flex item-center justify-between p-1 z-[100] w-full'>
    <h1 className='text-yellow-500 text-3xl font-bold cursor-pointer   '>MovieVerse</h1>
    <div className='flex'>
        <button className='text-white p-2 font-bold  rounded hover:bg-slate-600 '>LOGIN</button>
        <Link to='/signup'>
        <button className='bg-indigo-600 text-white font-bold p-2 rounded cursor-pointer hover:bg-indigo-700' >SIGN UP</button>
        </Link>
    </div>
    </div>
  )

}

export default Navbar;