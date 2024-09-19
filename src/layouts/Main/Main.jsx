import { Popular } from '../Popular/Popular';
import { Slider } from '../../components/Slider/Slider';
import { data } from '../../../public/data';
import { Section } from '../../components/Section/Section';

const products = ['pizza', 'combo', 'snacks', 'deserts', 'drinks'];
const titleSections = ['Пицца', 'Комбо', 'Закуски', 'Десерты', 'Напитки'];

export const Main = () => {
  return (
    <>
      <Slider />
      <Popular />
      {products.map((products, i) => (
        <Section
          key={products}
          id={products}
          data={data[products]}
          title={titleSections[i]}
        />
      ))}
    </>
  );
};
