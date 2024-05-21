import { Button } from '../../ui/Button/Button';
import s from './Modal.module.scss';
import { useEffect } from 'react';
import img1 from '../../assets/img/modalIngredients/bort.png';
import img2 from '../../assets/img/modalIngredients/mushrooms.png';
import img3 from '../../assets/img/modalIngredients/chicken.png';
import img4 from '../../assets/img/modalIngredients/cheese.png';
import img5 from '../../assets/img/modalIngredients/pepper.png';
import img6 from '../../assets/img/modalIngredients/6.png';
import img7 from '../../assets/img/modalIngredients/mozzarella.png';
import img8 from '../../assets/img/modalIngredients/cheddar.png';
import img9 from '../../assets/img/modalIngredients/cucumbers.png';
import closeImg from '../../assets/icon/close.svg';
import { CardIngredients } from '../CardIngredients/CardIngredients';
const ingredients = [
  {
    img: img1,
    title: 'Сырный бортик',
    price: '199',
  },
  {
    img: img2,
    title: 'Шампиньоны',
    price: '39',
  },
  {
    img: img3,
    title: 'Цыпленок',
    price: '59',
  },
  {
    img: img4,
    title: 'Кубики брынзы',
    price: '79',
  },
  {
    img: img5,
    title: 'Острый перец халапеньо',
    price: '59',
  },
  {
    img: img6,
    title: 'Нежный цыпленок',
    price: '99',
  },
  {
    img: img7,
    title: 'Сливочная моцарелла',
    price: '79',
  },
  {
    img: img8,
    title: 'Сыры чеддер и пармезан',
    price: '79',
  },
  {
    img: img9,
    title: 'Маринованные огурчики',
    price: '59',
  },
];

export const Modal = ({ onClose, name, img, desc, price, type }) => {
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
                <Button variant="bigPrimary">
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
