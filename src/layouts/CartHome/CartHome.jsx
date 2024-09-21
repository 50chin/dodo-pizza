import { useState } from 'react';
import { addToOrder } from '../../../public/addToOrder';
import { useCart } from '../../app/providers/CartContext';
import { CardAddToCard } from '../../components/CardAddToCard/CardAddToCard';
import { CartItem } from '../../components/CartItem/CartItem';
import { Button } from '../../ui/Button/Button';
import { Container } from '../Container';
import s from './CartHome.module.scss';

export const CartHome = () => {
  const { cart, deleteFromCart, addToCart } = useCart();
  const [count, setCount] = useState(1);
  const sum = cart.reduce((acc, el) => acc + count * el.price, 0);

  const incrementCount = () => setCount((prevState) => prevState + 1);
  const decrementCount = () => setCount((prevState) => prevState - 1);

  return (
    <div className={s.cart}>
      <Container>
        <div className={s.cart__wrapper}>
          <h2 className={s.cart__title}>Корзина</h2>
          <div className={s.cart__section}>
            <div className={s.cart__items}>
              {cart.map((el) => (
                <CartItem
                  key={el.id}
                  el={el}
                  count={count}
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
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
            Сумма заказа: <span> {sum} ₽</span>
          </p>
          <div className={s.cart__btns}>
            <Button variant="bigPrimary">Вернуться в меню</Button>
            <Button variant="bigPrimary">Оформить заказ </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
