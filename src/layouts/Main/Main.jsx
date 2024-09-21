import { Popular } from '../Popular/Popular';
import { Slider } from '../../components/Slider/Slider';
import { data } from '../../../public/data';
import { Section } from '../../components/Section/Section';
import s from './Main.module.scss';

const products = ['pizza', 'combo', 'snacks', 'deserts', 'drinks'];
const titleSections = ['Пицца', 'Комбо', 'Закуски', 'Десерты', 'Напитки'];

export const Main = () => {
  return (
    <>
      <Slider />
      <Popular />
      <div className={s.main__wrapper}>
        {products.map((products, i) => (
          <Section
            key={products}
            id={products}
            data={data.filter((el) => el.category === products)}
            title={titleSections[i]}
          />
        ))}
      </div>
    </>
  );
};
