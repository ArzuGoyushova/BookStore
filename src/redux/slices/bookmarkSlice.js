import { createSlice } from '@reduxjs/toolkit';
const storedBookmark = JSON.parse(localStorage.getItem('bookmark'));

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarkItems: storedBookmark || [],
    bookmarkQuantity: storedBookmark ? storedBookmark.length : 0,
  },
  reducers: {
    updateBookmarkQuantity: (state, action) => {
      state.bookmarkQuantity = action.payload;
    },

    addToBookmarkAction: (state, action) => {
      const { id, title, imageUrl, author } = action.payload;
      state.bookmarkItems.push({ id, title, imageUrl, author });
      state.bookmarkQuantity = state.bookmarkItems.length;
      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));
    },
    
    removeFromBookmarkAction: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.bookmarkItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.bookmarkItems.splice(itemIndex, 1);
      }
      state.bookmarkQuantity = state.bookmarkItems.length;
      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));
    }
  }
});

export const { updateBookmarkQuantity, addToBookmarkAction, removeFromBookmarkAction } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
