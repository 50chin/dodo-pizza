import { CartLayout } from '../../layouts/CartLayout/CartLayout';
import s from './CartOrder.module.scss';

export const CartOrder = () => {
  return (
    <CartLayout>
      <div className={s.cartOrder}>
        <h2 className={s.cartOrder__title}>Заказ на доставку</h2>
      </div>
    </CartLayout>
  );
};
