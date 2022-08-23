import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../../redux/slices/pizzasSlice';
import {
  setIsVisiblePopup,
  setActivePizza,
  setActivePrice,
} from '../../redux/slices/popupAddPizzaSlice';

import S from './PizzasList.module.scss';

import PizzaSkeleton from '../PizzaSkeleton/PizzaSkeleton';
import PopupAddPizza from '../PopupAddPizza/PopupAddPizza';

const PizzasList = () => {
  const dispatch = useDispatch();

  const isVisiblePopup = useSelector((state) => state.PopupAddPizza.isVisiblePopup);
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  /* console.log('PIZZAS RENDER, array:', pizzas); */

  useEffect(() => {
    dispatch(fetchPizzas());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const selectPizza = (imageUrl, name, sizes, types) => {
    dispatch(setActivePrice(sizes[0].price));
    dispatch(setIsVisiblePopup(true));
    dispatch(setActivePizza({ imageUrl, name, sizes, types }));

    //Отключаем скролл
    const pagePosition = window.scrollY;
    document.body.dataset.position = pagePosition;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';
    document.body.style.left = '0px';
    document.body.style.top = `-${pagePosition}px`;
  };

  return (
    <ul className={S.list}>
      {pizzas.length === 0
        ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
        : pizzas.map(({ _id, imageUrl, name, description, sizes, types }) => (
            <li
              className={S.item}
              key={_id}
              onClick={() => selectPizza(imageUrl, name, sizes, types)}>
              <img src={imageUrl} alt={name} />
              <h4>{name}</h4>
              <p>{description}</p>
              <span>От {sizes[0].price} &#8381;</span>
            </li>
          ))}
      {isVisiblePopup && <PopupAddPizza />}
    </ul>
  );
};

export default PizzasList;
