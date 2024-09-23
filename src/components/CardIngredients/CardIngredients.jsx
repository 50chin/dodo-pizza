import { useState } from 'react';
import s from './CardIngredients.module.scss';
import circleIcon from '../../assets/icon/circle.svg';
import { useCart } from '../../app/providers/CartContext';

export const CardIngredients = ({
  img,
  title,
  price,
  handleAddIngredients,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const { addToPizza } = useCart();

  const handleChoice = () => {
    setIsSelected((prevState) => !prevState);
  };

  const handleClick = (title, price) => {
    handleChoice();
    if (!isSelected) {
      handleAddIngredients(price);
      addToPizza(title, price);
    } else {
      handleAddIngredients(-price);
    }
  };

  return (
    <>
      <button
        className={`${s.card__btn} ${isSelected ? s.card_selected : ''}`}
        onClick={() => handleClick(title, price)}
      >
        {isSelected ? (
          <img className={s.card__icon} src={circleIcon} alt="icon" />
        ) : (
          ''
        )}
        <img className={s.card__img} src={img} alt="img" />
        <p className={s.card__title}>{title}</p>
        <span className={s.card__price}>{price} ₽</span>
      </button>
    </>
  );
};
