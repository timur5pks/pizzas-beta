import { configureStore } from '@reduxjs/toolkit';

import searchParams from './slices/searchParamsSlice';
import pizzas from './slices/pizzasSlice';
import PopupAddPizza from './slices/popupAddPizzaSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    searchParams,
    pizzas,
    PopupAddPizza,
    cart,
  },
});
