import s from './CardAddToCard.module.scss';

export const CardAddToCard = ({ el, onClick }) => {
  return (
    <article className={s.card}>
      <div className={s.card__wrapper}>
        <img className={s.card__img} src={el.img} alt="img" />
        <div>
          <h3 className={s.card__name}>{el.name}</h3>
          <button className={s.card__price} type="button" onClick={onClick}>
            {el.price} ₽
          </button>
        </div>
      </div>
    </article>
  );
};
