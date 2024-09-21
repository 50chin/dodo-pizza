import { useCart } from '../../app/providers/CartContext';
import { CartItem } from '../../components/CartItem/CartItem';
import { Container } from '../Container';
import { Popular } from '../Popular/Popular';
import s from './CartHome.module.scss';

export const CartHome = () => {
  const { cart } = useCart();

  return (
    <div className={s.cart}>
      <Container>
        <div className={s.cart__wrapper}>
          <h2 className={s.cart__title}>Корзина</h2>
          <div className={s.cart__items}>
            {cart.map((el) => (
              <CartItem key={el.id} el={el} />
            ))}
          </div>
          <p>Добавить к заказу?</p>
          <Popular />
        </div>
      </Container>
    </div>
  );
};
