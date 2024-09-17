import s from './Drinks.module.scss';
import { Container } from '../Container';
import { Card } from '../../components/Card/Card';
import { data } from '../../../public/data';

export const Drinks = () => {
  return (
    <section className={s.drinks} id="drinks">
      <Container>
        <h2>Напитки</h2>
        <div className="wrapper">
          {data.drinks.map((el, i) => {
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
