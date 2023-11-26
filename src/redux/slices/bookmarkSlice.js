import { createSlice } from '@reduxjs/toolkit';
const storedBookmark = JSON.parse(localStorage.getItem('bookmark'));

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarkItems: storedBookmark || [],
  },
  reducers: {
    addToBookmarkAction: (state, action) => {
      const { id, title, imageUrl, author } = action.payload;
      state.bookmarkItems.push({ id, title, imageUrl, author });
      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));
    },
    
    removeFromBookmarkAction: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.bookmarkItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.bookmarkItems.splice(itemIndex, 1);
      }

      localStorage.setItem('bookmark', JSON.stringify(state.bookmarkItems));
    }
  }
});

export const { addToBookmarkAction, removeFromBookmarkAction } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
