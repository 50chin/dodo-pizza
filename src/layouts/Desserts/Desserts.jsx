import s from "./Desserts.module.scss";
import { Container } from "../Container";
import { Card } from "../../components/Card/Card";
import { data } from "../../../data";

export const Desserts = () => {
  return (
    <section className={s.desserts} id="desserts">
      <Container>
        <h2>Десерты</h2>
        <div className="wrapper">
          {data.deserts.map((el, i) => {
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
