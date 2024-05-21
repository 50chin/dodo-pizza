import s from './Footer.module.scss';
import { Container } from '../Container';
import { InfoLists } from '../../components/InfoLists';
import appleImg from '../../assets/icon/apple.svg';
import googleImg from '../../assets/icon/google.svg';
import footLogo from '../../assets/icon/footLogo.svg';
import fbImg from '../../assets/icon/fb.svg';
import instImg from '../../assets/icon/inst.svg';
import odnoImg from '../../assets/icon/odno.svg';
import vkImg from '../../assets/icon/vk.svg';
import youtImg from '../../assets/icon/yout.svg';

const footerLists = [
  {
    name: 'Додо Пицца',
    lists: ['О нас', 'Додо-книга', 'Блог «Сила ума»', 'Додо ИС'],
  },
  {
    name: 'Работа',
    lists: ['В пиццерии', 'В контакт- центре'],
  },
  {
    name: 'Партнерам',
    lists: ['Франшиза', 'Инвестиции', 'Поставщикам', 'Предложить помещение'],
  },
  {
    name: 'Это интересно',
    lists: ['Экскурсии и мастер-классы', 'Корпоративные заказы'],
  },
];

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__top}>
          <div className={s.footer__topLeft}>
            {footerLists.map((el, i) => (
              <InfoLists key={i} name={el.name} list={el.lists} />
            ))}
          </div>
          <div className={s.footer__topRight}>
            <div className={s.footer__appStore}>
              <a href="#">
                <img src={googleImg} alt="google" />
              </a>
              <a href="#">
                <img src={appleImg} alt="apple" />
              </a>
            </div>
            <div className={s.footer__contact}>
              <a className={s.footer__tel} href="tel:8-800-302-00-60">
                8-800-302-00-60
              </a>
              <p>Звонок бесплатный</p>
              <a
                className={s.footer__mail}
                href="mailto:feedback@dodopizza.com"
              >
                feedback@dodopizza.com
              </a>
            </div>
          </div>
        </div>
        <div className={s.footer__main}>
          <div>
            <p className={s.footer__text}>1 396 362 874 ₽</p>
            <p className={s.footer__copy}>
              Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽
            </p>
          </div>
          <div>
            <p className={s.footer__text}>688 пиццерий</p>
            <p className={s.footer__copy}>
              в 14 странах, включая Китай, США и Великобританию
            </p>
          </div>
        </div>
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
      </Container>
    </footer>
  );
};
