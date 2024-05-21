import s from './Header.module.scss';

import mLogo from '../../assets/icon/mLogo.svg';
import { useWindowWidth } from '../../app/providers/WidthProviders';

import { Container } from '../Container';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import { Button } from '../../ui/Button/Button';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';

export const Header = () => {
  const width = useWindowWidth();
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
                <a href="tel:+78003020060">8 800 302-00-60</a>
                <p className={s.header__text}>Звонок бесплатный</p>
              </div>
            </div>
            <div className={s.header__bottom}>
              <NavPanel />
              <Button type="button" variant="primary">
                Корзина
              </Button>
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
