import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartQuantity: 0,
  },
  reducers: {
    updateCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },

    addToCartAction: (state, action) => {
      const { id, title, imageUrl, author, regularPrice, quantity = 1 } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, title, imageUrl, author, regularPrice, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      const totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartQuantity = totalQuantity;
    },
    
    removeFromCartAction: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      const totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartQuantity = totalQuantity;
    },

    updateQuantityAction: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      const totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartQuantity = totalQuantity;
    },
  },
  name: 'bookmarks',
  initialState: {
    bookmarkedItems: [],
    bookmarkedQuantity: 0
  },
  reducers: {
    addToBookmarkedAction: (state, action) => {
      const { id, title, imageUrl, author, regularPrice, quantity = 1 } = action.payload;
      const existingItem = state.bookmarkedItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.bookmarkedItems.push({ id, title, imageUrl, author, regularPrice, quantity });
      }

      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarkedItems));

      const totalQuantity = state.bookmarkedItems.reduce((total, item) => total + item.quantity, 0);
      state.bookmarkedQuantity = totalQuantity;
    },
  }
});

export const { updateCartQuantity, addToCartAction, removeFromCartAction, updateQuantityAction } = cartSlice.actions;
export default cartSlice.reducer;
