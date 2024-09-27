import { useContext } from 'react';
import s from './NavPanel.module.scss';
import { WindowWidthContext } from '../../app/providers/WidthProviders';
import { ScrollContext } from '../../app/providers/ScrollContext';

export const NavPanel = ({ isFixed }) => {
  const width = useContext(WindowWidthContext);
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const nav = document.getElementById('nav');
  //   const handleScroll = () => {
  //     if (window.scrollY > nav.offsetTop) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const navList = [
    { name: 'Пицца', productsId: 'pizza' },
    { name: 'Комбо', productsId: 'combo' },
    { name: 'Закуски', productsId: 'snacks' },
    { name: 'Десерты', productsId: 'desserts' },
    { name: 'Напитки', productsId: 'drinks' },
    { name: 'Другие товары', productsId: null },
  ];

  return (
    <>
      <nav
        className={`${s.nav} ${
          isFixed && width <= 431
            ? s.nav__fixed
            : isFixed && width > 431
            ? s.nav__fixed
            : ''
        }`}
        id="nav"
      >
        <ul className={s.nav__lists}>
          {navList.map((el, i) => (
            <li key={i} className={s.nav__list}>
              <a href={`#${el.productsId}`}>{el.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
