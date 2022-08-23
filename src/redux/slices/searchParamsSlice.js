import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilterCategory: 'Все',
  activeSortCategory: { name: 'популярности', value: '-rating' },
  currentPage: 1,
};

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setActiveFilterCategory(state, action) {
      state.activeFilterCategory = action.payload;
    },
    setActiveSortCategory(state, action) {
      state.activeSortCategory = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveFilterCategory, setActiveSortCategory, setCurrentPage } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;
