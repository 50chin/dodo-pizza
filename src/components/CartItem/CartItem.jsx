import s from './CartItem.module.scss';
import deleteIcon from '../../assets/icon/delete.svg';
import decrIcon from '../../assets/icon/decrement.svg';
import incrIcon from '../../assets/icon/increment.svg';

export const CartItem = ({
  el,
  decrementCount,
  incrementCount,
  deleteFromCart,
}) => {
  return (
    <article className={s.item}>
      <div className={s.item__left}>
        <img className={s.item__img} src={el.img} alt="img" />
        <div className={s.item__text}>
          <p className={s.item__name}>{el.name}</p>
          <p className={s.item__desc}>
            {el.category === 'pizza'
              ? 'Средняя 30 см, традиционное тесто'
              : '1шт.'}
          </p>
          {el.category === 'pizza' ? (
            <p className={s.item__ingredients}>
              {el.addToPizza.length >= 1
                ? `+  ${el.addToPizza.map((item) => item.title).join(', ')}`
                : ''}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={s.item__right}>
        <div className={s.item__btnCount}>
          <button className={s.item__decr} onClick={() => decrementCount(el)}>
            <img src={decrIcon} alt="" />
          </button>
          <p className={s.item__counter}>{el.quantity}</p>
          <button onClick={() => incrementCount(el)}>
            <img src={incrIcon} alt="" />
          </button>
        </div>
        <p className={s.item__price}>{el.price * el.quantity} ₽</p>
        <button
          className={s.item__btnDelete}
          onClick={() => deleteFromCart(el)}
        >
          <img src={deleteIcon} alt="icon" />
        </button>
      </div>
    </article>
  );
};
