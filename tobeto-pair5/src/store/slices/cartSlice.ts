import {createSlice} from "@reduxjs/toolkit";
import {ProductModel} from "../../models/responses/ProductModel";

interface CartItem {
	product: ProductModel;
	quantity: number;
}

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: JSON.parse(localStorage.getItem("cart") || "[]") || [],
	},
	reducers: {
		addToCart: (state, action) => {
			let existingItem = state.cartItems.find(
				(i: CartItem) => i.product.id == action.payload.product.id,
			);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.cartItems.push({product: action.payload.product, quantity: 1});
			}
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(i: any) => i.product.id !== action.payload.product.id,
			);
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		clearCart: state => {
			state.cartItems = [];
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;





// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: number;

// }

// interface CartState {
//   cartItems: CartItem[];
// }

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: [],
//   } as CartState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       state.cartItems = [...state.cartItems, action.payload];
//     },
//     removeFromCart: (state, action: PayloadAction<CartItem>) => {
//       state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload.id);
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export const cartReducer = cartSlice.reducer;
