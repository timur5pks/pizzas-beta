import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilterCategory, setCurrentPage } from '../../redux/slices/searchParamsSlice';

import S from './Filter.module.scss';

import { fetchPizzas, deletePizzas } from '../../redux/slices/pizzasSlice';

const Filter = () => {
  const filterCategories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const activeFilterCategory = useSelector((state) => state.searchParams.activeFilterCategory);
  const dispatch = useDispatch();

  const handleCkickFilterButton = (category) => {
    dispatch(setActiveFilterCategory(category));
    dispatch(setCurrentPage(1));
    dispatch(deletePizzas());
    dispatch(fetchPizzas());
  };

  return (
    <ul className={S.list}>
      {filterCategories.map((category, i) => (
        <li key={i}>
          <button
            onClick={() => handleCkickFilterButton(category)}
            className={`${S.category} ${activeFilterCategory === category ? S.active : ''}`}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
