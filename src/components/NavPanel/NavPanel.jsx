import { useContext, useEffect, useState } from 'react';
import s from './NavPanel.module.scss';
import { WindowWidthContext } from '../../app/providers/WidthProviders';

export const NavPanel = () => {
  const width = useContext(WindowWidthContext);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (window.scrollY > nav.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={s.nav}
        id="nav"
        style={
          isFixed && width <= 431
            ? {
                position: 'fixed',
                top: '0',
                background: '#FFF',
                boxShadow: '0px 5px 25px 0px rgba(115, 121, 140, 0.10)',
                padding: '13px 0',
              }
            : {}
        }
      >
        <ul className={s.nav__lists}>
          <li className={s.nav__list}>
            <a href="#pizza">Пицца</a>
          </li>
          <li className={s.nav__list}>
            <a href="#combo">Комбо</a>
          </li>
          <li className={s.nav__list}>
            <a href="#snacks">Закуски</a>
          </li>
          <li className={s.nav__list}>
            <a href="#desserts">Десерты</a>
          </li>
          <li className={s.nav__list}>
            <a href="#drinks">Напитки</a>
          </li>
          <li className={s.nav__list}>
            <a href="#">Другие товары</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
