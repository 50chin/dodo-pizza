import s from './CallNumber.module.scss';

export const CallNumber = () => {
  return (
    <div className={s.call}>
      <a className={s.call__tel} href="tel:8-800-302-00-60">
        8-800-302-00-60
      </a>
      <p className={s.call__text}>Звонок бесплатный</p>
    </div>
  );
};
