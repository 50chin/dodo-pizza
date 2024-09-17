import { Container } from '../Container';
import s from './Pizza.module.scss';
import { Card } from '../../components/Card/Card';
import { useWindowWidth } from '../../app/providers/WidthProviders';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import { data } from '../../../public/data';

export const Pizza = () => {
  const width = useWindowWidth();

  return (
    <section className={s.pizza} id="pizza">
      {width < 431 && <NavPanel />}
      <Container>
        <h2>Пицца</h2>
        <div className="wrapper">
          {data.pizza.map((el) => {
            return (
              <Card
                type="pizza"
                key={el.id}
                item={el}
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
