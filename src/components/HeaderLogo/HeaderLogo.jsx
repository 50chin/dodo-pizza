import s from './HeaderLogo.module.scss';
import logo from '../../assets/icon/logo.svg';

export const HeaderLogo = () => {
  return (
    <div className={s.logo}>
      <a href="#">
        <img className={s.logo__img} src={logo} alt="logo" />
      </a>
    </div>
  );
};
