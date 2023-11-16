import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarkItems: [],
    bookmarkQuantity: 0,
  },
  reducers: {
    updateBookmarkQuantity: (state, action) => {
      state.bookmarkQuantity = action.payload;
    },

    addToBookmarkAction: (state, action) => {
      const { id, title, imageUrl, author, regularPrice, quantity = 1 } = action.payload;
      const existingItem = state.bookmarkItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.bookmarkItems.push({ id, title, imageUrl, author, regularPrice, quantity });
      }

      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));

      const totalQuantity = state.bookmarkItems.reduce((total, item) => total + item.quantity, 0);
      state.bookmarkQuantity = totalQuantity;
    },
    
    removeFromBookmarkAction: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.bookmarkItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.bookmarkItems.splice(itemIndex, 1);
      }

      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));

      const totalQuantity = state.bookmarkItems.reduce((total, item) => total + item.quantity, 0);
      state.bookmarkQuantity = totalQuantity;
    },

    updateQuantityAction: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.bookmarkItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));

      const totalQuantity = state.bookmarkItems.reduce((total, item) => total + item.quantity, 0);
      state.bookmarkQuantity = totalQuantity;
    },
  }
});

export const { updateBookmarkQuantity, addToBookmarkAction, removeFromBookmarkAction, updateQuantityAction } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
