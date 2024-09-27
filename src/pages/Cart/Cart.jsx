import s from './Cart.module.scss';
import { CartLayout } from '../../layouts/CartLayout/CartLayout';
import { CartHome } from '../../layouts/CartHome/CartHome';

export const Cart = () => {
  return (
    <>
      <section className={s.cart}>
        <CartHome />
      </section>
    </>
  );
};
