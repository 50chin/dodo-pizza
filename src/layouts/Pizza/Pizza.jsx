import { Container } from '../Container';
import s from './Pizza.module.scss';
import img1 from '../../assets/img/pizza/1.webp';
import img2 from '../../assets/img/pizza/2.webp';
import img3 from '../../assets/img/pizza/3.webp';
import img4 from '../../assets/img/pizza/4.webp';
import img5 from '../../assets/img/pizza/5.webp';
import img6 from '../../assets/img/pizza/6.webp';
import img7 from '../../assets/img/pizza/7.webp';
import img8 from '../../assets/img/pizza/8.webp';
import { Card } from '../../components/Card/Card';
import { useWindowWidth } from '../../app/providers/WidthProviders';
import { NavPanel } from '../../components/NavPanel/NavPanel';

const pizzaObj = [
  {
    img: img1,
    name: 'Пицца из половинок',
    desc: 'Соберите свою пиццу 35 см с двумя разными вкусами',
    price: 'от 600 ₽',
    btn: 'Собрать',
  },
  {
    img: img2,
    name: 'Пепперони-сердце',
    desc: 'Пикантная пепперони, моцарелла, томатный соус',
    price: 'от 625 ₽',
    btn: 'Выбрать',
  },
  {
    img: img3,
    name: 'Пирог-сердце',
    desc: 'Ананасы, брусника, сгущенное молоко',
    price: 'от 625 ₽',
    btn: 'Выбрать',
  },
  {
    img: img4,
    name: 'Чиззи чеддер',
    desc: 'Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы',
    price: 'от 625 ₽',
    btn: 'Выбрать',
  },
  {
    img: img5,
    name: 'Цыпленок блю чиз',
    desc: 'Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо',
    price: 'от 455 ₽',
    btn: 'Выбрать',
  },
  {
    img: img6,
    name: 'Нежный лосось',
    desc: 'Лосось, томаты черри, соус песто, моцарелла, соус альфредо',
    price: 'от 495 ₽',
    btn: 'Выбрать',
  },
  {
    img: img7,
    name: 'Сырная',
    desc: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
    price: 'от 245 ₽',
    btn: 'Выбрать',
  },
  {
    img: img8,
    name: 'Пепперони фреш',
    desc: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
    price: 'от 245 ₽',
    btn: 'Выбрать',
  },
];

export const Pizza = () => {
  const width = useWindowWidth();

  return (
    <section className={s.pizza} id="pizza">
      {width < 431 && <NavPanel />}
      <Container>
        <h2>Пицца</h2>
        <div className="wrapper">
          {pizzaObj.map((el, i) => {
            return (
              <Card
                type="pizza"
                key={i}
                img={el.img}
                name={el.name}
                desc={el.desc}
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
