import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async (_, { getState }) => {
  const currentPage = getState().searchParams.currentPage;
  const activeSortCategory = getState().searchParams.activeSortCategory.value;
  const activeFilterCategory = getState().searchParams.activeFilterCategory;
  const { data } = await axios.get(
    `https://pizzas-backend.herokuapp.com/pizzas?sortBy=${activeSortCategory}&page=${currentPage}${
      activeFilterCategory === 'Все' ? '' : `&filterBy=${activeFilterCategory}`
    }`,
  );
  return data;
});

const initialState = {
  pizzas: [],
  totalPages: 1,
  status: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
    deletePizzas(state) {
      state.pizzas = [];
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.pizzas = action.payload.pizzas;
      state.totalPages = action.payload.totalPages;
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      console.log('Была ошибка');
    },
  },
});

export const { setPizzas, deletePizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
