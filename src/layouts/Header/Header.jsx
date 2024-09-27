import s from './Header.module.scss';
import mLogo from '../../assets/icon/mLogo.svg';
import { WindowWidthContext } from '../../app/providers/WidthProviders';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import { Button } from '../../ui/Button/Button';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { CallNumber } from '../../components/CallNumber/CallNumber';
import { useContext } from 'react';
import { ScrollContext } from '../../app/providers/ScrollContext';
import { CartContext } from '../../app/providers/CartContext';

export const Header = () => {
  const width = useContext(WindowWidthContext);
  const isFixed = useContext(ScrollContext);
  const { cart } = useContext(CartContext);
  return (
    <header className={s.header}>
      <Container>
        {width > 431 ? (
          <>
            <div className={s.header__wrapper}>
              <div className={s.header__topLeft}>
                <HeaderLogo />
              </div>
              <div className={s.header__tel}>
                <CallNumber />
              </div>
            </div>
            <div
              className={`${s.header__navBar} ${
                isFixed ? s.header__navBar_fixed : ''
              }`}
            >
              <NavPanel isFixed={isFixed} />
              <Link to={'/dodo-pizza/cart'}>
                <Button type="button" variant="primary" className={s.header__button}>
                  Корзина
                  <span >
                    {cart.length > 0
                      ? ` | ${cart.reduce((acc, el) => acc + el.quantity, 0)}`
                      : ''}
                  </span>
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={s.header__wrapper}>
              <img className={s.header__mLogo} src={mLogo} alt="logo" />
            </div>
          </>
        )}
      </Container>
    </header>
  );
};
