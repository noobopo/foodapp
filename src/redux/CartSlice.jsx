import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exist = state.cart.find((item) => item.id === action.payload.id);

            if (exist) {
                state.cart = state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                state.cart = [...state.cart, { ...action.payload, qty: 1 }];
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        increaceQty: (state, action) => {
            const id = state.cart.findIndex((item) => item.id === action.payload.id)
            state.cart[id].qty += 1
        },
        decreaseQty: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item && typeof item.qty === 'number') {
                item.qty -= 1;
            }
        }

    }
})

export const { addToCart, removeFromCart, increaceQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer