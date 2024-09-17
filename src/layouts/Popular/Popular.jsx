import { data } from "../../../data";
import { Container } from "../../layouts/Container";
import s from "./Popular.module.scss";

export const Popular = () => {
  return (
    <section className={s.popular} id="popular">
      <Container>
        <h2>Новое и популярное</h2>
        <div className={s.popular__wrapper}>
          {data.popular.map((el) => {
            return (
              <div key={el.id} className={s.popular__card}>
                <img src={el.img} alt="pizza" />
                <div>
                  <p className={s.popular__name}>{el.name}</p>
                  <p className={s.popular__price}>{el.price} ₽</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
