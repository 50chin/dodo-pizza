import { useEffect, useState } from 'react';
import s from './NavPanel.module.scss';
import { useWindowWidth } from '../../app/providers/WidthProviders';

export const NavPanel = () => {
  const width = useWindowWidth();

  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const nav = document.getElementById('nav');
    console.log(nav);
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
          isFixed && width < 431
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
            <a href="#">Комбо</a>
          </li>
          <li className={s.nav__list}>
            <a href="#">Закуски</a>
          </li>
          <li className={s.nav__list}>
            <a href="#">Десерты</a>
          </li>
          <li className={s.nav__list}>
            <a href="#">Напитки</a>
          </li>
          <li className={s.nav__list}>
            <a href="#">Другие товары</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
