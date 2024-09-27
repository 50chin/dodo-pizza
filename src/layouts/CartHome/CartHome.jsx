import { useContext, useEffect, useState } from 'react';
import { addToOrder } from '../../../public/addToOrder';
import { CartContext } from '../../app/providers/CartContext';
import { CardAddToCard } from '../../components/CardAddToCard/CardAddToCard';
import { CartItem } from '../../components/CartItem/CartItem';
import { Button } from '../../ui/Button/Button';
import { Container } from '../Container';
import s from './CartHome.module.scss';
import { CartLayout } from '../CartLayout/CartLayout';
import { Link } from 'react-router-dom';

export const CartHome = () => {
  const { cart, deleteFromCart, addToCart, incrementCount, decrementCount } =
    useContext(CartContext);

  const [totalSum, setTotalSum] = useState(0);
  // Переменна которая хранит значение общей суммы заказа
  useEffect(() => {
    const totalSum = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);

    setTotalSum(totalSum);
  }, [cart]);

  return (
    <CartLayout>
      <div className={s.cart}>
        <Container>
          <div className={s.cart__wrapper}>
            <h2 className={s.cart__title}>Корзина</h2>
            <div className={s.cart__section}>
              {cart.length != 0 ? (
                <div className={s.cart__items}>
                  {cart.map((el) => (
                    <CartItem
                      key={el.id}
                      el={el}
                      incrementCount={incrementCount}
                      decrementCount={decrementCount}
                      deleteFromCart={deleteFromCart}
                    />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
            <p className={s.cart__text}>Добавить к заказу?</p>
            <div className={s.cart__panel}>
              {addToOrder.map((el) => (
                <CardAddToCard
                  key={el.id}
                  el={el}
                  onClick={() => addToCart(el)}
                />
              ))}
            </div>
            <p className={s.cart__sum}>
              Сумма заказа: <span> {totalSum} ₽</span>
            </p>
            <div className={s.cart__btns}>
              <Link to={'/dodo-pizza/'}>
                <Button variant="bigPrimary">Вернуться в меню</Button>
              </Link>
              <Button variant="bigPrimary">Оформить заказ </Button>
            </div>
          </div>
        </Container>
      </div>
    </CartLayout>
  );
};
