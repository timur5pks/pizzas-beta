import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSortCategory, setCurrentPage } from '../../redux/slices/searchParamsSlice';
import { fetchPizzas, deletePizzas } from '../../redux/slices/pizzasSlice';

import S from './Sort.module.scss';

export const sortCategories = [
  { name: 'популярности', value: '-rating' },
  { name: 'цене', value: 'price' },
  { name: 'алфавиту', value: 'name' },
];

const Sort = () => {
  const sortButtonRef = useRef();

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const activeSortCategory = useSelector((state) => state.searchParams.activeSortCategory);
  const dispatch = useDispatch();

  const handleClickCategory = (sortCategory) => {
    dispatch(setActiveSortCategory(sortCategory));
    dispatch(setCurrentPage(1));
    setIsVisiblePopup(false);
    dispatch(deletePizzas());
    dispatch(fetchPizzas());
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(sortButtonRef.current) && isVisiblePopup) {
        setIsVisiblePopup(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isVisiblePopup]);

  return (
    <div className={S.container}>
      <span>Сортировка по: </span>
      <button
        ref={sortButtonRef}
        className={S.togglePopupButton}
        onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
        {activeSortCategory.name}
      </button>
      {isVisiblePopup && (
        <ul className={S.popup}>
          {sortCategories.map((sortCategory, i) => (
            <li key={i}>
              <button
                className={`${S.category} ${
                  sortCategory.name === activeSortCategory.name ? S.active : ''
                }`}
                onClick={() => handleClickCategory(sortCategory)}>
                {sortCategory.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
