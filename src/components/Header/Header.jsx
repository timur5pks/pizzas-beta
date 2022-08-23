import React from 'react';
import { Link } from 'react-router-dom';

import S from './Header.module.scss';

import CartButton from '../CartButton/CartButton';

import logoUrl from '../../resources/images/logo.svg';

const Header = () => {
  return (
    <header className={S.header}>
      <Link to="/" className={S.logo}>
        <img src={logoUrl} alt="Pizza Mario" />
      </Link>
      <h1 className={S.title}>Pizza Mario</h1>
      <h2 className={S.subtitle}>Самая вкусная пицца во вселенной</h2>
      <CartButton />
    </header>
  );
};

export default Header;
