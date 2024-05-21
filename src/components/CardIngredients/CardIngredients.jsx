import s from './CardIngredients.module.scss';

export const CardIngredients = ({ img, title, price }) => {
  return (
    <>
      <button className={s.card__btn}>
        <img src={img} alt="" />
        <p className={s.card__title}>{title}</p>
        <span className={s.card__price}>{price} ₽</span>
      </button>
    </>
  );
};
