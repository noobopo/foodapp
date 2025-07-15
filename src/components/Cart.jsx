import React, { useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeFromCart, increaceQty, decreaseQty } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoCart } from "react-icons/io5";


const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleCart = () => setOpen(!open);

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleQtyup = (e) => {
    dispatch(increaceQty(e))
  }

  const handleQtydown = (e) => {
    dispatch(decreaseQty(e))
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <>
      <div className={`fixed right-0 top-0 h-full w-full md:w-[50vw] lg:w-[25vw] bg-white z-50 shadow-lg 
        transform transition-transform duration-500 ease-in-out 
        ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl text-gray-700 font-bold">My Orders</h2>
          <FaRegWindowClose onClick={handleCart} size={27} className="hover:text-red-600 cursor-pointer" />
        </div>

        <div className="flex flex-col gap-3 p-4 overflow-y-auto max-h-[calc(100vh-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-3 border rounded-md shadow-sm">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                    <MdDelete onClick={() => handleRemove(item)} size={23} className="text-red-500 cursor-pointer hover:text-red-600" />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-green-600 font-medium">${item.price}</span>
                    <div className="flex items-center border rounded px-2 py-1 bg-gray-100">
                      <button
                        onClick={() => handleQtydown(item)}
                        disabled={item.qty <= 1}
                        className={`px-2 text-sm font-semibold ${item.qty <= 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-black'}`}>
                        -
                      </button>
                      <span className="px-2 text-sm">{item.qty}</span>
                      <button onClick={() => handleQtyup(item)} className="px-2 text-sm font-semibold hover:text-black">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 w-full bg-white border-t p-4">
          <h2 className="text-xl font-medium text-gray-700">Items: {cart.length}</h2>
          <h2 className="text-xl font-medium text-gray-700">Total Amount: ${total}</h2>
          <button className="mt-3 bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
      <button
        onClick={handleCart}
        className="fixed bottom-5 right-5 p-3 bg-green-300 hover:bg-green-400 transition rounded-full shadow-lg"
      >
        <IoCart size={25} />
      </button>
    </>
  );
};

export default Cart;
