import { useContext, useState } from 'react';
import s from './CardIngredients.module.scss';
import circleIcon from '../../assets/icon/circle.svg';

export const CardIngredients = ({
  img,
  title,
  price,
  handleAddIngredients,
  setAddIngredients,
  addIngredients,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  //  Функция по изменению состояние с false на true
  const handleChoice = () => {
    setIsSelected((prevState) => !prevState);
  };
  // Функция по клику на карточки ингредиентов
  const handleClick = (title, price) => {
    handleChoice();
    if (!isSelected) {
      handleAddIngredients(price);
      handleAddToPizza(title, price);
    } else {
      handleAddIngredients(-price);
      handleAddToPizza(title, price);
    }
  };

  // Функция для добавления ингредиентов в отдельный массив
  const handleAddToPizza = (title, price) => {
    if (!isSelected) {
      setAddIngredients((prevAddToPizza) => [
        ...prevAddToPizza,
        { title: title, price: price },
      ]);
    } else {
      const updatedIngredients = addIngredients.filter(
        (el) => el.title != title
      );
      setAddIngredients(updatedIngredients);
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
