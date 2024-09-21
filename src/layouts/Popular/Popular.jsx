import { data } from '../../../public/data';
import { Container } from '../../layouts/Container';
import s from './Popular.module.scss';

export const Popular = () => {
  const popularData = data.filter((item) => item.category === 'popular');
  return (
    <section className={s.popular} id="popular">
      <Container>
        <h2>Новое и популярное</h2>
        <div className={s.popular__wrapper}>
          {popularData.map((el) => (
            <article key={el.id} className={s.popular__card}>
              <img src={el.img} alt="pizza" />
              <div>
                <p className={s.popular__name}>{el.name}</p>
                <p className={s.popular__price}>{el.price} ₽</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
