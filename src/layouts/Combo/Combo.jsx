import { Container } from "../Container";
import s from "./Combo.module.scss";
import { Card } from "../../components/Card/Card";
import { data } from "../../../data";

export const Combo = () => {
  return (
    <section className={s.combo} id="combo">
      <Container>
        <h2>Комбо</h2>
        <div className="wrapper">
          {data.combo.map((el, i) => (
            <Card
              key={i}
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
