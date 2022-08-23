import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzasInCart: [],
  count: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPizzasInCart(state, action) {
      state.pizzasInCart = [...action.payload];
    },
    addNewPizza(state, action) {
      state.pizzasInCart.push(action.payload);
      state.count = state.count + 1;
    },
    addExistingPizza(state, action) {
      state.pizzasInCart[action.payload].count += 1;
      state.count = state.count + 1;
    },
    removeOnePizza(state, action) {
      state.pizzasInCart[action.payload].count -= 1;
      state.count = state.count - 1;
    },
    increaseTotalPrice(state, action) {
      state.totalPrice += action.payload;
    },
    decreaseTotalPrice(state, action) {
      state.totalPrice -= action.payload;
    },
    deleteCurrentPizza(state, action) {
      state.count -= state.pizzasInCart[action.payload].count;
      state.totalPrice -=
        state.pizzasInCart[action.payload].price * state.pizzasInCart[action.payload].count;
      state.pizzasInCart.splice(action.payload, 1);
    },
    clearCart(state, action) {
      state.count = 0;
      state.pizzasInCart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addNewPizza,
  addExistingPizza,
  removeOnePizza,
  increaseTotalPrice,
  decreaseTotalPrice,
  deleteCurrentPizza,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
