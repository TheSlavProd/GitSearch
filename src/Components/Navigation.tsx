import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
   <nav className='flex  justify-between items-center h-[50px] px-5 bg-gray-500 text-white'>

    <h3 className='font-bold'>Github search</h3>
    <span>
        <Link to="/">Home </Link>
        <Link to="/favorite">Favorite</Link>
    </span>
   </nav>
  )
}
