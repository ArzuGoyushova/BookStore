import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarkItems: [],
    bookmarkQuantity: 0,
  },
  reducers: {
    addToBookmarkAction: (state, action) => {
      const { id } = action.payload;
      state.bookmarkItems.push({ id });
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
