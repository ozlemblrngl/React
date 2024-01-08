import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;

}

interface CartState {
  cartItems: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
