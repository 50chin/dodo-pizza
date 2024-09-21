import s from './CartItem.module.scss';
import deleteIcon from '../../assets/icon/delete.svg';
import decrIcon from '../../assets/icon/decrement.svg';
import incrIcon from '../../assets/icon/increment.svg';

export const CartItem = ({ el }) => {
  return (
    <article className={s.item}>
      <div className={s.item__left}>
        <img className={s.item__img} src={el.img} alt="img" />
        <div className={s.item__text}>
          <p className={s.item__name}>{el.name}</p>
          <p className={s.item__desc}>Средняя 30 см, традиционное тесто</p>
        </div>
      </div>
      <div className={s.item__right}>
        <div className={s.item__btnCount}>
          <button className={s.item__decr}>
            <img src={decrIcon} alt="" />
          </button>
          <p className={s.item__counter}>1</p>
          <button>
            <img src={incrIcon} alt="" />
          </button>
        </div>
        <p className={s.item__price}> 600 ₽</p>
        <button className={s.item__btnDelete}>
          <img src={deleteIcon} alt="icon" />
        </button>
      </div>
    </article>
  );
};
