import { Routes, Route } from 'react-router-dom';

import S from './Content.module.scss';

import Pizzas from '../Pizzas/Pizzas';
import Cart from '../Cart/Cart';

const Content = () => {
  return (
    <main className={S.content}>
      <Routes>
        <Route path="/" element={<Pizzas />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Content;
