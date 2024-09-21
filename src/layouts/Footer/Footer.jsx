import s from './Footer.module.scss';
import { Container } from '../Container';
import { InfoLists } from '../../components/InfoLists/InfoLists';
import appleImg from '../../assets/icon/apple.svg';
import googleImg from '../../assets/icon/google.svg';
import { FooterBottom } from '../../components/FooterBottom/FooterBottom';
import { CallNumber } from '../../components/CallNumber/CallNumber';
import { Mail } from '../../components/Mail/Mail';

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

export const Footer = ({ cart }) => {
  return (
    <footer className={s.footer}>
      <Container>
        {cart === 'cart' ? (
          <>
            <div className={s.footer__wrapper}>
              <CallNumber />
            </div>
            <FooterBottom cart={cart} />
          </>
        ) : (
          <>
            <div className={s.footer__wrapper}>
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
                    <CallNumber />
                    <Mail />
                  </div>
                </div>
              </div>
              <div className={s.footer__main}>
                <div>
                  <p className={s.footer__text}>1 396 362 874 ₽</p>
                  <p className={s.footer__copy}>
                    Выручка российской сети в этом месяце. В прошлом — 2 460 305
                    416 ₽
                  </p>
                </div>
                <div>
                  <p className={s.footer__text}>688 пиццерий</p>
                  <p className={s.footer__copy}>
                    в 14 странах, включая Китай, США и Великобританию
                  </p>
                </div>
              </div>
            </div>
            <FooterBottom />
          </>
        )}
      </Container>
    </footer>
  );
};
