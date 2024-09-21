import s from './CartHeader.module.scss';
import { Link } from 'react-router-dom';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { Container } from '../../layouts/Container';

export const CartHeader = () => {
  return (
    <>
      <div className={s.cart__header}>
        <Container>
          <div className={s.cart__wrapper}>
            <div className={s.cart__logo}>
              <HeaderLogo />
            </div>
            <div className={s.cart__right}>
              <div className={s.cart__order}>
                <p className={s.cart__number}>1</p>
                <p className={s.cart__copy}>Корзина</p>
              </div>
              <div className={s.cart__order}>
                <p className={s.cart__number}>2</p>
                <p className={s.cart__copy}>Оформление заказа</p>
              </div>
              <div className={s.cart__order}>
                <p className={s.cart__number}>3</p>
                <p className={s.cart__copy}>Заказ принят</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
