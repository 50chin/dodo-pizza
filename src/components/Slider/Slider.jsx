import s from './Slider.module.scss';
import slide1 from '../../assets/img/slide/1.webp';
import slide2 from '../../assets/img/slide/2.webp';
import slide3 from '../../assets/img/slide/3.webp';
import mobSlide1 from '../../assets/img/slide/m1.webp';
import mobSlide2 from '../../assets/img/slide/m2.webp';
import { Container } from '../../layouts/Container';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '../../app/providers/WidthProviders';

const imgSlide = [slide1, slide2, slide3];
const imgMobSlide = [mobSlide1, mobSlide2];

export const Slider = () => {
  const width = useWindowWidth();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(
        (nextSlide) =>
          (nextSlide + 1) % (width > 431 ? imgSlide.length : imgMobSlide.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [width]);

  return (
    <section className={s.slider}>
      <div className={s.slider__wrapper}>
        {(width > 431 ? imgSlide : imgMobSlide).map((el, i) => (
          <img
            key={i}
            src={el}
            alt="slide"
            style={{
              display: i === slide ? 'block' : 'none',
            }}
          />
        ))}
      </div>
    </section>
  );
};
