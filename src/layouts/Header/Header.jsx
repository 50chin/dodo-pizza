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

export const Header = () => {
  const width = useContext(WindowWidthContext);
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
            <div className={s.header__bottom}>
              <NavPanel />
              <Link to={'/dodo-pizza/cart'}>
                <Button type="button" variant="primary">
                  Корзина
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={s.header__wrapper}>
              <img className={s.header__mLogo} src={mLogo} alt="logo" />
            </div>
            {/* тут была ошибка  */}
          </>
        )}
      </Container>
    </header>
  );
};
