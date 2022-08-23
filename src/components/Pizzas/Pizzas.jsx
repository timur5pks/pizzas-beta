import React from 'react';

import S from './Pizzas.module.scss';

import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import PizzasList from '../PizzasList/PizzasList';
import Pagination from '../Pagination/Pagination';

const Pizzas = () => {
  return (
    <section className={S.pizzas}>
      <Filter />
      <Sort />
      <h3 className={S.title}>Пиццы</h3>
      <PizzasList />
      <Pagination />
    </section>
  );
};

export default Pizzas;
