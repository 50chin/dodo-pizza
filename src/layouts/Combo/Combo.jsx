import { Container } from '../Container';
import s from './Combo.module.scss';
import { Card } from '../../components/Card/Card';
import img1 from '../../assets/img/combo/1.webp';
import img2 from '../../assets/img/combo/2.webp';

const comboObj = [
  {
    img: img1,
    name: 'Комбо за 599 ₽',
    desc: 'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.',
    price: '599 ₽',
    btn: 'Собрать',
  },
  {
    img: img1,
    name: '2 пиццы',
    desc: 'Самое популярное комбо из 2 пицц 30 см. Большой выбор',
    price: '899 ₽',
    btn: 'Собрать',
  },
  {
    img: img1,
    name: '2 пиццы и закуска',
    desc: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
    price: '799 ₽',
    btn: 'Собрать',
  },
  {
    img: img1,
    name: 'Пицца и 2 закуски',
    desc: 'Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек',
    price: '799 ₽',
    btn: 'Собрать',
  },
  {
    img: img2,
    name: 'Комбо за 999 ₽',
    desc: '3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен',
    price: '999 ₽',
    btn: 'Собрать',
  },
];

export const Combo = () => {
  return (
    <section className={s.combo} id="combo">
      <Container>
        <h2>Комбо</h2>
        <div className="wrapper">
          {comboObj.map((el, i) => {
            return (
              <Card
                key={i}
                img={el.img}
                name={el.name}
                desc={el.desc}
                from={el.from}
                price={el.price}
                btn={el.btn}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
