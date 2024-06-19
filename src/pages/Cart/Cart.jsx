import { Container } from '../../layouts/Container';
import s from './Cart.module.scss';
import { CartHeader } from '../../components/CartHeader/CartHeader';

export const Cart = () => {
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
