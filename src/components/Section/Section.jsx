import { Container } from '../../layouts/Container';
import { Card } from '../Card/Card';
import s from './Section.module.scss';

export const Section = ({ title, data, id }) => {
  return (
    <section className={s.products} id={id}>
      <Container>
        <h2>{title}</h2>
        <div className={s.products__wrapper}>
          {data.map((el) => (
            <Card
              key={el.id}
              item={el}
              category={el.category}
              img={el.img}
              name={el.name}
              desc={el.desc}
              from={el.from}
              price={el.price}
              btn={el.btn}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
