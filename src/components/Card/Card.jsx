import s from './Card.module.scss';
import { Button } from '../../ui/Button/Button';
import { useWindowWidth } from '../../app/providers/WidthProviders';
import { Portal } from '../../components/Portal/Portal';
import { Modal } from '../../components/Modal/Modal';
import { useState } from 'react';
import { useCart } from '../../app/providers/CartContext';

export const Card = ({ img, name, desc, price, btn, category, item }) => {
  const width = useWindowWidth();
  const { addToCart } = useCart();

  const [state, setState] = useState(false);

  const onClose = () => {
    setState(false);
  };

  return (
    <>
      <article
        className={s.card}
        onClick={item.btn === 'Выбрать' ? () => setState(true) : null}
      >
        <img src={img} alt="pizza" />
        <div className={s.card__wrapper}>
          <div className={s.card__text}>
            <h3 className={s.card__name}>{name}</h3>
            <p className={s.card__desc}>{desc}</p>
          </div>
          <div className={s.card__bottom}>
            <p className={s.card__price}>
              {item.category === 'pizza' ? 'от ' : ''} {price} ₽
            </p>
            <Button
              onClick={
                item.btn === 'В корзину'
                  ? () => addToCart(item)
                  : item.btn === 'Выбрать'
                  ? () => setState(true)
                  : null
              }
              type="button"
              variant={btn === 'Собрать' ? 'primary' : 'secondary'}
            >
              {width > 431
                ? btn === 'Собрать'
                  ? 'Собрать'
                  : btn === 'Выбрать'
                  ? 'Выбрать'
                  : 'В корзину'
                : price}
            </Button>
          </div>
        </div>
      </article>
      {state && (
        <Portal>
          <Modal
            item={item}
            category={category}
            btn={btn}
            onClose={onClose}
            img={img}
            name={name}
            desc={desc}
            price={price}
          />
        </Portal>
      )}
    </>
  );
};
