import s from './InfoLists.module.scss';

export const InfoLists = ({ name, list }) => {
  return (
    <div className={s.info}>
      <h5 className={s.info__title}>{name}</h5>
      <ul className={s.info__lists}>
        {list.map((el, i) => (
          <li key={i} className={s.info__list}>
            <a href="#">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
