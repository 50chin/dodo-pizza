import s from './FooterBottom.module.scss';
import footLogo from '../../assets/icon/footLogo.svg';
import fbImg from '../../assets/icon/fb.svg';
import instImg from '../../assets/icon/inst.svg';
import odnoImg from '../../assets/icon/odno.svg';
import vkImg from '../../assets/icon/vk.svg';
import youtImg from '../../assets/icon/yout.svg';

export const FooterBottom = () => {
  return (
    <div className={s.footer__bottom}>
      <div className={s.footer__logo}>
        <img src={footLogo} alt="logo" />
        <span className={s.footer__copy}>© 2021</span>
      </div>
      <div className={s.footer__legalInfo}>
        <a className={s.footer__copy} href="#">
          Правовая информация
        </a>
        <a className={s.footer__copy} href="#">
          Калорийность и состав
        </a>
        <a className={s.footer__copy} href="#">
          Помощь
        </a>
      </div>
      <div className={s.footer__social}>
        <ul className={s.footer__lists}>
          <li className={s.footer__list}>
            <a href="#">
              <img src={fbImg} alt="facebook" />
            </a>
          </li>
          <li className={s.footer__list}>
            <a href="#">
              <img src={instImg} alt="instagram" />
            </a>
          </li>
          <li className={s.footer__list}>
            <a href="#">
              <img src={odnoImg} alt="OK" />
            </a>
          </li>
          <li className={s.footer__list}>
            <a href="#">
              <img src={vkImg} alt="vk" />
            </a>
          </li>
          <li className={s.footer__list}>
            <a href="#">
              <img src={youtImg} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
