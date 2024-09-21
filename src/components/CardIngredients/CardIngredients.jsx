import { useState } from 'react';
import s from './CardIngredients.module.scss';
import circleIcon from '../../assets/icon/circle.svg';

export const CardIngredients = ({
  img,
  title,
  price,
  handleAddIngredients,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoice = () => {
    setIsSelected((prevState) => !prevState);
  };

  const handleClick = () => {
    handleChoice();
    if (!isSelected) {
      handleAddIngredients(price);
    } else {
      handleAddIngredients(-price);
    }
  };

  return (
    <>
      <button
        className={`${s.card__btn} ${isSelected ? s.card_selected : ''}`}
        onClick={() => handleClick()}
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
