import s from './Desserts.module.scss';
import { Container } from '../Container';
import { Card } from '../../components/Card/Card';

import img1 from '../../assets/img/desserts/1.webp';
import img2 from '../../assets/img/desserts/2.webp';
import img3 from '../../assets/img/desserts/3.webp';
import img4 from '../../assets/img/desserts/4.webp';

const dataDesserts = [
  {
    img: img1,
    name: 'Яблочный пирог',
    desc: 'Десерт из песочного теста с яблочной начинкой. Может содержать изюм',
    price: '99 ₽',
    btn: 'В корзину',
  },
  {
    img: img2,
    name: 'Чизкейк Нью-Йорк',
    desc: 'Классический американский творожный десерт',
    price: '149 ₽',
    btn: 'В корзину',
  },
  {
    img: img3,
    name: 'Фонданы, 2 шт',
    desc: 'Два десерта с хрустящей корочкой и топлёной шоколадной начинкой',
    price: '159 ₽',
    btn: 'В корзину',
  },
  {
    img: img4,
    name: 'Молочный коктейль с печеньем Орео',
    desc: 'Напиток из молока и мороженого с добавлением дробленого печенья «Орео»',
    price: '159 ₽',
    btn: 'В корзину',
  },
  {
    img: img4,
    name: 'Классический молочный коктейль',
    desc: 'Напиток из молока и мороженого',
    price: '159 ₽',
    btn: 'В корзину',
  },
];

export const Desserts = () => {
  return (
    <section className={s.desserts} id="desserts">
      <Container>
        <h2>Десерты</h2>
        <div className="wrapper">
          {dataDesserts.map((el, i) => {
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
