import s from './FooterBottom.module.scss';
import footLogo from '../../assets/icon/footLogo.svg';
import fbImg from '../../assets/icon/fb.svg';
import instImg from '../../assets/icon/inst.svg';
import odnoImg from '../../assets/icon/odno.svg';
import vkImg from '../../assets/icon/vk.svg';
import youtImg from '../../assets/icon/yout.svg';
import { Container } from '../../layouts/Container';
import { Mail } from '../Mail/Mail';

const socialImages = [fbImg, instImg, odnoImg, vkImg, youtImg];
const legalInfo = ['Правовая информация', 'Калорийность и состав', 'Помощь'];

export const FooterBottom = ({ cart }) => {
  return (
    <div className={s.footer__bottom}>
      <Container>
        <div className={s.footer__wrapper}>
          <div className={s.footer__logo}>
            <img src={footLogo} alt="logo" />
            <span className={s.footer__copy}>© 2021</span>
          </div>
          <ul className={s.footer__legalInfo}>
            {legalInfo.map((el, i) => (
              <li key={i}>
                <a className={s.footer__copy} href="#">
                  {el}
                </a>
              </li>
            ))}
          </ul>
          <div className={s.footer__social}>
            {cart === 'cart' ? (
              <Mail />
            ) : (
              <ul className={s.footer__lists}>
                {socialImages.map((el, i) => (
                  <li key={i} className={s.footer__list}>
                    <a href="#">
                      <img src={el} alt="icon" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
