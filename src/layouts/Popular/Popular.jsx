import { Container } from '../../layouts/Container';
import s from './Popular.module.scss';
import img1 from '../../assets/img/popular/1.png';
import img2 from '../../assets/img/popular/2.png';
import img3 from '../../assets/img/popular/3.png';
import img4 from '../../assets/img/popular/4.png';

const popularObj = [
  {
    name: 'Цезарь',
    price: 'от 445',
    img: img1,
  },
  {
    name: 'Нежный лосось',
    price: 'от 495',
    img: img2,
  },
  {
    name: '2 пиццы',
    price: '899',
    img: img3,
  },
  {
    name: 'Карбонара',
    price: 'от 395',
    img: img4,
  },
];

export const Popular = () => {
  return (
    <section className={s.popular} id="popular">
      <Container>
        <h2>Новое и популярное</h2>
        <div className={s.popular__wrapper}>
          {popularObj.map((el, i) => {
            return (
              <div key={i} className={s.popular__card}>
                <img src={el.img} alt="pizza" />
                <div>
                  <p className={s.popular__name}>{el.name}</p>
                  <p className={s.popular__price}>{el.price} ₽</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
