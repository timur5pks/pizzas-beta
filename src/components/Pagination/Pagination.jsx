import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import S from './Pagination.module.scss';

import { setCurrentPage } from '../../redux/slices/searchParamsSlice';
import { fetchPizzas, deletePizzas } from '../../redux/slices/pizzasSlice';

const Pagination = () => {
  const totalPages = useSelector((state) => state.pizzas.totalPages);
  const currentPage = useSelector((state) => state.searchParams.currentPage);

  const dispatch = useDispatch();

  const handlePageButtonClick = (i) => {
    dispatch(setCurrentPage(i + 1));
    dispatch(deletePizzas());
    dispatch(fetchPizzas());
    window.scrollTo(0, 0);
  };

  return (
    totalPages > 1 && (
      <ul className={S.list}>
        {[...new Array(totalPages)].map((_, i) => (
          <li key={i}>
            <button
              onClick={() => handlePageButtonClick(i)}
              className={`${S.item} ${currentPage === i + 1 ? S.active : ''}`}>
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default Pagination;
