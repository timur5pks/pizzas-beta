import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisiblePopup: false,
  imageUrl: '',
  name: '',
  sizes: [],
  types: [],
  activeSize: 'Маленькая',
  activeType: 'Традиционное',
  activePrice: 0,
};

const popupAddPizzaSlice = createSlice({
  name: 'popupAddPizza',
  initialState,
  reducers: {
    setIsVisiblePopup(state, action) {
      state.isVisiblePopup = action.payload;
    },
    setActivePizza(state, action) {
      state.imageUrl = action.payload.imageUrl;
      state.name = action.payload.name;
      state.sizes = action.payload.sizes;
      state.types = action.payload.types;
    },
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
    setActiveType(state, action) {
      state.activeType = action.payload;
    },
    setActivePrice(state, action) {
      state.activePrice = action.payload;
    },
  },
});

export const { setIsVisiblePopup, setActivePizza, setActiveSize, setActiveType, setActivePrice } =
  popupAddPizzaSlice.actions;

export default popupAddPizzaSlice.reducer;
