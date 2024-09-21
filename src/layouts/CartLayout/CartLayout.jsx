import { CartHeader } from '../../components/CartHeader/CartHeader';
import { Footer } from '../../layouts/Footer/Footer';
import s from './CartLayout.module.scss';

export const CartLayout = ({ children }) => {
  return (
    <>
      <CartHeader />
      {children}
      <Footer cart="cart" />
    </>
  );
};
