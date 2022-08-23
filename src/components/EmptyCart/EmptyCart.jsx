import React from 'react';
import { Link } from 'react-router-dom';

import S from './EmptyCart.module.scss';

import humanImgUrl from '../../resources/images/human.svg';

const EmptyCart = () => {
  return (
    <div className={S.container}>
      <h3 className={S.title}>Корзина пустая &#128532;</h3>
      <p className={S.description}>
        Вероятнее всего, Вы не ёше не выбрали пиццу. Для того, чтобы заказать пиццу, вернитесь на
        главную страницу.
      </p>
      <img className={S.humanImage} src={humanImgUrl} alt="Human with a basket" />
      <Link className={S.returnButton} to="/">
        Вернуться в меню
      </Link>
    </div>
  );
};

export default EmptyCart;
