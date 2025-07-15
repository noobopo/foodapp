import React, { useEffect, useState } from 'react'
import FoodData from '../../Fooddata'
import { useDispatch } from 'react-redux'
import { addCatagory } from '../redux/CatagorySlice'

const Catagory = () => {

    const dispatch = useDispatch()

    const handleCatacogy = (e) => {
        dispatch(addCatagory(e))
    }

    const [catagory, setCatagory] = useState([])

    const handleDatagory = () => {
        setCatagory([...new Set(FoodData.map((item) => item.category))])
    }
    useEffect(() => {
        handleDatagory()
    }, [])

    return (
        <div className='px-5 mt-5'>
            <h2 className=' px-4 text-2xl font-bold text-cyan-600'>Find the best food for you</h2>
            <div className=' flex gap-4  p-4 overflow-x-scroll md:overflow-hidden'>
                <button onClick={() => handleCatacogy("All")} className=' hover:bg-gray-100 hover:text-black px-9 py-1.5 border font-bold rounded-md bg-green-500 text-white transition-all duration-500 cursor-pointer'>All</button>
                {
                    catagory.map((cat, index) => <button onClick={() => handleCatacogy(cat)} key={index} className=' hover:bg-gray-100 hover:text-black px-8 py-1.5 border font-bold rounded-md bg-green-500 text-white transition-all duration-500 cursor-pointer'>{cat}</button>)
                }
            </div>
        </div>
    )
}

export default Catagory