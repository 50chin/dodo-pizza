import s from './Snacks.module.scss';
import { Container } from '../Container';
import { Card } from '../../components/Card/Card';
import img1 from '../../assets/img/snacks/1.webp';
import img2 from '../../assets/img/snacks/2.webp';
import img3 from '../../assets/img/snacks/3.webp';
import img4 from '../../assets/img/snacks/4.webp';

const dataSnacks = [
  {
    img: img1,
    name: 'Томатный суп с гренками',
    desc: 'Горячий суп с пшеничными гренками на основе фирменного соуса из итальянских томатов',
    price: '99 ₽',
    btn: 'Заказать',
  },
  {
    img: img1,
    name: 'Томатный суп с митболами',
    desc: 'Горячий суп c митболами из говядины и маслинами на основе фирменного соуса из итальянских томатов',
    price: '149 ₽',
    btn: 'Заказать',
  },
  {
    img: img2,
    name: 'Додстер',
    desc: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
    price: '159 ₽',
    btn: 'Заказать',
  },
  {
    img: img3,
    name: 'Острый Додстер',
    desc: 'Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
    price: '159 ₽',
    btn: 'Заказать',
  },
  {
    img: img4,
    name: 'Додстер Чипотле',
    desc: 'Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной лепешке',
    price: '159 ₽',
    btn: 'Заказать',
  },
];

export const Snacks = () => {
  return (
    <section className={s.snacks} id="snacks">
      <Container>
        <h2>Закуски</h2>
        <div className="wrapper">
          {dataSnacks.map((el, i) => {
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
