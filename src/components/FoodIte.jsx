import React, { useEffect, useState } from 'react'
import FoodData from '../../Fooddata'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import toast, { Toaster } from 'react-hot-toast';


const FoodIte = () => {

    const {search} = useSelector((state)=>state.search)

    const { catagory } = useSelector((state) => state.catagory)
    const [Food, setFood] = useState(FoodData)

    const handleFood = () => {
    let filtered = FoodData;

    if (catagory !== "All") {
        filtered = filtered.filter((i) => i.category === catagory);
    }

    if (search.trim() !== "") {
        filtered = filtered.filter((i) =>
            i.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    setFood(filtered);
};
    useEffect(()=>{
        handleFood()
    },[catagory,search])

    
    const dispatch = useDispatch()
    const handleAdd = (e) => {
        dispatch(addToCart(e))
        handleTost()
    }
    const handleTost = () => {
        toast.success('Item added to cart!')
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className=" min-h-screen py-8">
                <div className="flex flex-wrap gap-8 justify-center  mx-auto">
                    {Food.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 rounded-md border transition-shadow duration-300 w-80 p-2 flex flex-col justify-between"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="rounded-xl  h-62 w-full hover:scale-105 transition-all duration-500 ease-in-out"
                            />

                            <div className="mt-4 flex justify-between items-center px-3">
                                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                <h2 className="text-green-600 font-bold text-md">$ {item.price}</h2>
                            </div>

                            <p className="text-sm text-gray-600 line-clamp-2 mt-1 px-3">{item.desc}</p>

                            <div className="mt-4 flex justify-between items-center px-2">
                                <span className="text-yellow-500 text-xl font-medium">{item.rating} ★</span>
                                <button onClick={() => handleAdd(item)} className="bg-green-500 hover:bg-green-600 transition-colors text-white text-sm px-8 py-1.5 rounded-md">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FoodIte
