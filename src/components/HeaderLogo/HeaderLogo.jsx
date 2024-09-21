import s from './HeaderLogo.module.scss';
import logo from '../../assets/icon/logo.svg';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <div className={s.logo}>
      <Link to={'/dodo-pizza/'}>
        <img className={s.logo__img} src={logo} alt="logo" />
      </Link>
    </div>
  );
};
