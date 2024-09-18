import s from './Snacks.module.scss';
import { Container } from '../Container';
import { Card } from '../../components/Card/Card';
import { data } from '../../../public/data';

export const Snacks = () => {
  return (
    <section className={s.snacks} id="snacks">
      <Container>
        <h2>Закуски</h2>
        <div className="wrapper">
          {data.snacks.map((el, i) => {
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
