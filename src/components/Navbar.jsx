import React from 'react'

function Navbar() {
  return (
    <div className='flex item-center justify-between p-4 z-[100] w-full absolute'>
    <h1 className='text-yellow-500 text-4xl font-bold cursor-pointer'>MovieVerse</h1>
    <div>
        <button className='text-white p-2 font-bold border-white'>LOGIN</button>
        <button className='bg-indigo-600 text-white font-bold p-2 rounded cursor-pointer' >BUY PLAN</button>
    </div>
    </div>
  )

}

export default Navbar;