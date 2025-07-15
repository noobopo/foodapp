import React from 'react'
import Navbar from '../components/Navbar'
import Catagory from '../components/Catagory'
import FoodIte from '../components/FoodIte'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Catagory />
      <FoodIte />
      <Cart />
    </div>
  )
}

export default Home