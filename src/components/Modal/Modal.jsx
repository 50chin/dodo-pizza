import { Button } from '../../ui/Button/Button';
import s from './Modal.module.scss';
import { useEffect } from 'react';
import closeImg from '../../assets/icon/close.svg';
import { CardIngredients } from '../CardIngredients/CardIngredients';
import { ingredients } from '../../../public/ingredients';
import { useCart } from '../../app/providers/CartContext';

export const Modal = ({ onClose, name, img, desc, price, type, item }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <div className={s.modal} onClick={() => onClose()}>
        {type === 'pizza' ? (
          <div
            className={s.modal__wrapper}
            onClick={(evt) => evt.stopPropagation()}
          >
            <div className={s.modal__left}>
              <img src={img} alt="" />
            </div>
            <div className={s.modal__right}>
              <h3 className={s.modal__title}>{name}</h3>

              <p className={s.modal__copy}>30 см, традиционное тесто, 480 г</p>
              <p className={s.modal__desc}>{desc}</p>
              <div className={s.modal__choice}>
                <button type="button">Маленькая</button>
                <button type="button">Средняя</button>
                <button type="button">Большая</button>
              </div>
              <div className={s.modal__choice}>
                <button type="button">Традиционное</button>
                <button type="button">Тонкое</button>
              </div>
              <p className={s.modal__subtitle}>Добавить в пиццу</p>
              <section className={s.modal__cards}>
                {ingredients.map((el, i) => {
                  return (
                    <CardIngredients
                      key={i}
                      img={el.img}
                      title={el.title}
                      price={el.price}
                    />
                  );
                })}
              </section>
              <div className={s.modal__addBtn}>
                <Button variant="bigPrimary" onClick={() => addToCart(item)}>
                  Добавить в корзину за {price.replace('от', '')}
                </Button>
              </div>
            </div>
            <button
              className={s.modal__closeBtn}
              type="button"
              onClick={() => onClose()}
            >
              <img src={closeImg} alt="" />
            </button>
          </div>
        ) : (
          <div
            style={{ width: '740px', height: '389px' }}
            className={s.modal__wrapper}
            onClick={(evt) => evt.stopPropagation()}
          >
            <div className={s.modal__left}>
              <img
                src={img}
                alt=""
                style={{ width: '292px', height: '292px' }}
              />
            </div>
            <div
              className={s.modal__right}
              style={{
                width: '740px',
                height: '389px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 className={s.modal__title}>{name}</h3>
                <p>? гр.</p>
                <p className={s.modal__desc}>{desc}</p>
              </div>
              <Button variant="bigPrimary">
                Добавить в корзину за {price.replace('от', '')}
              </Button>
            </div>
            <button
              style={{ top: '10px', right: '-50px' }}
              className={s.modal__closeBtn}
              type="button"
              onClick={() => onClose()}
            >
              <img src={closeImg} alt="" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
