import { useState } from 'react';
import s from './CardIngredients.module.scss';
import circleIcon from '../../assets/icon/circle.svg';

export const CardIngredients = ({ img, title, price }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoice = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <>
      <button
        className={`${s.card__btn} ${isSelected ? s.card_selected : ''}`}
        onClick={() => handleChoice()}
      >
        {isSelected ? (
          <img className={s.card__icon} src={circleIcon} alt="" />
        ) : (
          ''
        )}
        <img className={s.card__img} src={img} alt="" />
        <p className={s.card__title}>{title}</p>
        <span className={s.card__price}>{price} ₽</span>
      </button>
    </>
  );
};
