import { Popular } from '../Popular/Popular';
import { Slider } from '../../components/Slider/Slider';
import { data } from '../../../public/data';
import { Section } from '../../components/Section/Section';
import s from './Main.module.scss';
import { useContext } from 'react';
import { WindowWidthContext } from '../../app/providers/WidthProviders';
import { NavPanel } from '../../components/NavPanel/NavPanel';

const products = ['pizza', 'combo', 'snacks', 'desserts', 'drinks'];
const titleSections = ['Пицца', 'Комбо', 'Закуски', 'Десерты', 'Напитки'];

export const Main = () => {
  const width = useContext(WindowWidthContext);

  return (
    <>
      <Slider />
      <Popular />
      {width < 431 && <NavPanel />}
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
