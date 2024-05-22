import s from './Footer.module.scss';
import { Container } from '../Container';
import { InfoLists } from '../../components/InfoLists';
import appleImg from '../../assets/icon/apple.svg';
import googleImg from '../../assets/icon/google.svg';
import { FooterBottom } from '../../components/FooterBottom/FooterBottom';
import { FooterCall } from '../../components/FooterCall/FooterCall';

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
              <FooterCall />
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
        <FooterBottom />
      </Container>
    </footer>
  );
};
