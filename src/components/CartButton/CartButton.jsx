import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import S from './CartButton.module.scss';

import cartUrl from '../../resources/images/cart.svg';

import { deletePizzas } from '../../redux/slices/pizzasSlice';

const CartButton = () => {
  const pizzasCount = useSelector((state) => state.cart.count);

  const dispatch = useDispatch();

  return (
    <Link to={'/cart'} className={S.openCartButton} onClick={() => dispatch(deletePizzas())}>
      <span>Корзина</span>
      <img src={cartUrl} alt="cart" />
      <span>{pizzasCount}</span>
    </Link>
  );
};

export default CartButton;
