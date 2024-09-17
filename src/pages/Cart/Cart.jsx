import { Container } from '../../layouts/Container';
import s from './Cart.module.scss';
import { CartHeader } from '../../components/CartHeader/CartHeader';
import { useCart } from '../../app/providers/CartContext';

export const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <section className={s.cart}>
        <Container>
          <CartHeader />
         </Container>
      </section>
    </>
  );
};
