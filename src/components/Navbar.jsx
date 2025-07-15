import React from 'react'
import { IoCart } from "react-icons/io5";
import { addSearch } from '../redux/SearchSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className='bg-white flex flex-col md:flex-row justify-around py-2 items-center shadow sticky top-0'>
        <div>
            <h2 className='text-4xl font-bold text-teal-700'>Foodie</h2>
            <h2>{new Date().toUTCString().slice(0,16)}</h2>
        </div>
        <div>
            <input onChange={(e)=>dispatch(addSearch(e.target.value))} type="search" placeholder='Search here...' className=' outline-1 outline-green-600 py-1 px-2 w-78 rounded-md' />
        </div>
        {/* <IoCart /> */}
    </nav>
  )
}

export default Navbar