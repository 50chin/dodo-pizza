import { Button } from '../../ui/Button/Button';
import s from './Modal.module.scss';
import { useContext, useEffect, useState } from 'react';
import closeImg from '../../assets/icon/close.svg';
import { CardIngredients } from '../CardIngredients/CardIngredients';
import { ingredients } from '../../../public/ingredients';
import { CartContext } from '../../app/providers/CartContext';
import { SizeRadioButton } from '../../ui/SizeRadioInput/SizeRadioButton';
import { TypeRadioButton } from '../../ui/TypeRadioButton/TypeRadioButton';

export const Modal = ({ onClose, name, img, desc, price, item }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [sum, setSum] = useState(0);
  const [addIngredients, setAddIngredients] = useState([]);
  const [sizePizza, setSizePizza] = useState('middle');

  // Функция для сложения суммы с ценой ингредиентов
  const handleAddIngredients = (price) => {
    setSum((prevState) => prevState + price);
  };
  // При открытии модального окна , body - scroll, style = hidden
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {item.category === 'pizza' && (
        <div className={s.modal} onClick={() => onClose()}>
          {item.btn === 'Выбрать' ? (
            <div
              className={s.modal__wrapper}
              onClick={(evt) => evt.stopPropagation()}
            >
              <div className={s.modal__left}>
                <img src={img} alt="" />
              </div>
              <div className={s.modal__right}>
                <h3 className={s.modal__title}>{name}</h3>

                <p className={s.modal__copy}>
                  {sizePizza === 'middle'
                    ? '30 см, традиционное тесто, 480 '
                    : sizePizza === 'small'
                    ? '25 см, традиционное тесто, 290 '
                    : '35  см, традиционное тесто, 650 '}
                  г
                </p>
                <p className={s.modal__desc}>{desc}</p>
                <SizeRadioButton setSizePizza={setSizePizza} />
                <TypeRadioButton />
                <p className={s.modal__subtitle}>Добавить в пиццу</p>
                <section className={s.modal__cards}>
                  {ingredients.map((el, i) => {
                    return (
                      <CardIngredients
                        key={i}
                        img={el.img}
                        title={el.title}
                        price={el.price}
                        handleAddIngredients={handleAddIngredients}
                        setAddIngredients={setAddIngredients}
                        addIngredients={addIngredients}
                        cart={cart}
                      />
                    );
                  })}
                </section>
                <div className={s.modal__addBtn}>
                  <Button
                    variant="bigPrimary"
                    onClick={() => {
                      addToCart(item, addIngredients);
                      onClose();
                    }}
                  >
                    Добавить в корзину за {price + sum} ₽
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
            {
              //     <div
              //       style={{ width: '740px', height: '389px' }}
              //       className={s.modal__wrapper}
              //       onClick={(evt) => evt.stopPropagation()}
              //     >
              //       <div className={s.modal__left}>
              //         <img
              //           src={img}
              //           alt=""
              //           style={{ width: '292px', height: '292px' }}
              //         />
              //       </div>
              //       <div
              //         className={s.modal__right}
              //         style={{
              //           width: '740px',
              //           height: '389px',
              //           display: 'flex',
              //           flexDirection: 'column',
              //           justifyContent: 'space-between',
              //         }}
              //       >
              //         <div>
              //           <h3 className={s.modal__title}>{name}</h3>
              //           <p>? гр.</p>
              //           <p className={s.modal__desc}>{desc}</p>
              //         </div>
              //         <Button variant="bigPrimary" onClick={() => addToCart(item)}>
              //           Добавить в корзину за {price} ₽
              //         </Button>
              //       </div>
              //       <button
              //         style={{ top: '10px', right: '-50px' }}
              //         className={s.modal__closeBtn}
              //         type="button"
              //         onClick={() => onClose()}
              //       >
              //         <img src={closeImg} alt="" />
              //       </button>
              //     </div>
              //   )}
              // </div>
            }
          )}
        </div>
      )}
    </>
  );
};
