import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsVisiblePopup,
  setActiveSize,
  setActiveType,
  setActivePrice,
} from '../../redux/slices/popupAddPizzaSlice';
import { addNewPizza, addExistingPizza, increaseTotalPrice } from '../../redux/slices/cartSlice';

import S from './PopupAddPizza.module.scss';

const PopupAddPizza = () => {
  const dispatch = useDispatch();
  /* const { imageUrl, name, sizes } = useSelector((state) => state.PopupAddPizza); */
  const imageUrl = useSelector((state) => state.PopupAddPizza.imageUrl);
  const name = useSelector((state) => state.PopupAddPizza.name);
  const sizes = useSelector((state) => state.PopupAddPizza.sizes);
  const types = useSelector((state) => state.PopupAddPizza.types);
  const activeSize = useSelector((state) => state.PopupAddPizza.activeSize);
  const activeType = useSelector((state) => state.PopupAddPizza.activeType);
  const activePrice = useSelector((state) => state.PopupAddPizza.activePrice);
  const pizzasInCart = useSelector((state) => state.cart.pizzasInCart);

  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target === popupRef.current) {
        dispatch(setIsVisiblePopup(false));
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      dispatch(setActiveSize(sizes[0].size));
      dispatch(setActiveType(types[0]));
      document.body.removeEventListener('click', handleClickOutside);

      //Включаем скролл
      const pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.position = 'relative';
      document.body.style.height = 'auto';
      document.body.style.top = '';
      document.body.style.left = '';
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
    };
  }, [dispatch, sizes, types]);

  const handleSizeInputClick = (size, price) => {
    dispatch(setActiveSize(size));
    dispatch(setActivePrice(price));
  };

  //обработчик добавления пиццы в корзину
  const handleAddButtonClick = () => {
    const pizzaIndex = pizzasInCart.findIndex(
      (pizza) => pizza.name === name && pizza.size === activeSize && pizza.type === activeType,
    );
    if (pizzaIndex === -1) {
      dispatch(
        addNewPizza({
          imageUrl,
          name,
          size: activeSize,
          type: activeType,
          price: activePrice,
          count: 1,
        }),
      );
    } else {
      dispatch(addExistingPizza(pizzaIndex));
    }
    dispatch(increaseTotalPrice(activePrice));
    dispatch(setIsVisiblePopup(false));
    window.scrollTo(0, 0);
  };

  return (
    <div className={S.container} ref={popupRef}>
      <div className={S.form}>
        <img src={imageUrl} alt={name} className={S.image} />
        <h4 className={S.pizzaName}>{name}</h4>
        <ul className={S.sizesList}>
          {sizes.map(({ size, price }) => (
            <li key={size}>
              <label className={activeSize === size ? `${S.size} ${S.active}` : S.size}>
                {size}
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={() => handleSizeInputClick(size, price)}
                />
              </label>
            </li>
          ))}
        </ul>
        <ul className={S.typesList}>
          {types.map((type) => (
            <li key={type}>
              <label className={activeType === type ? `${S.type} ${S.active}` : S.type}>
                {type}
                <input
                  type="radio"
                  name="type"
                  value={type}
                  onChange={() => dispatch(setActiveType(type))}
                />
              </label>
            </li>
          ))}
        </ul>
        <button className={S.addButton} onClick={handleAddButtonClick}>
          Добавить в корзину за {activePrice} &#8381;
        </button>
        <button className={S.closeButton} onClick={() => dispatch(setIsVisiblePopup(false))} />
      </div>
    </div>
  );
};

export default PopupAddPizza;
