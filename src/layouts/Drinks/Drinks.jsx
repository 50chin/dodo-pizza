import s from './Drinks.module.scss';
import { Container } from '../Container';
import { Card } from '../../components/Card/Card';
import img1 from '../../assets/img/drinks/1.webp';
import img2 from '../../assets/img/drinks/2.webp';
import img3 from '../../assets/img/drinks/3.webp';
import img4 from '../../assets/img/drinks/4.webp';
import img5 from '../../assets/img/drinks/5.webp';

const dataDrinks = [
  {
    img: img1,
    name: '2 Coca-Cola по суперцене',
    desc: 'Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л',
    price: '99 ₽',
    btn: 'В корзину',
  },
  {
    img: img2,
    name: 'Coca-Cola Orange',
    desc: '0,5 л',
    price: '149 ₽',
    btn: 'В корзину',
  },
  {
    img: img3,
    name: 'Coca-Cola Zero',
    desc: '0,5 л',
    price: '149 ₽',
    btn: 'В корзину',
  },
  {
    img: img4,
    name: 'Coca-Cola',
    desc: '0,5 л',
    price: '149 ₽',
    btn: 'В корзину',
  },
  {
    img: img5,
    name: 'Coca-Cola Vanilla',
    desc: '0,5 л',
    price: '149 ₽',
    btn: 'В корзину',
  },
];

export const Drinks = () => {
  return (
    <section className={s.drinks} id="drinks">
      <Container>
        <h2>Напитки</h2>
        <div className="wrapper">
          {dataDrinks.map((el, i) => {
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
