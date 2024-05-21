import { Container } from "../../layouts/Container";
import { HeaderLogo } from "../../components/HeaderLogo/HeaderLogo";
import lineImg from "../../assets/icon/line.svg";
import s from "./Cart.module.scss";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <>
      <section className={s.cart}>
        <Container>
          <div className={s.cart__top}>
            <div className={s.cart__logo}>
              <Link to={"*"}>
                <HeaderLogo />
              </Link>
            </div>
            <div className={s.cart__right}>
              <div className={s.cart__order}>
                <p className={s.cart__number}>1</p>
                <p className={s.cart__copy}>Корзина</p>
              </div>
              <div className={s.cart__order}>
                <p className={s.cart__number}>2</p>
                <p className={s.cart__copy}>Оформление заказа</p>
              </div>
              <div className={s.cart__order}>
                <p className={s.cart__number}>3</p>
                <p className={s.cart__copy}>Заказ принят</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};