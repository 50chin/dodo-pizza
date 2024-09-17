import { Container } from "../Container";
import s from "./Pizza.module.scss";
import { Card } from "../../components/Card/Card";
import { useWindowWidth } from "../../app/providers/WidthProviders";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import { data } from "../../../data";

export const Pizza = () => {
  const width = useWindowWidth();

  return (
    <section className={s.pizza} id="pizza">
      {width < 431 && <NavPanel />}
      <Container>
        <h2>Пицца</h2>
        <div className="wrapper">
          {data.pizza.map((el, i) => {
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
