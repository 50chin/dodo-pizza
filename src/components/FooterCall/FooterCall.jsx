import s from './FooterCall.module.scss';

export const FooterCall = () => {
  return (
    <>
      <a className={s.footer__tel} href="tel:8-800-302-00-60">
        8-800-302-00-60
      </a>
      <p>Звонок бесплатный</p>
    </>
  );
};
