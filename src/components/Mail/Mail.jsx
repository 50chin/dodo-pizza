import s from './Mail.module.scss';

export const Mail = () => {
  return (
    <>
      <a className={s.mail} href="mailto:feedback@dodopizza.com">
        feedback@dodopizza.com
      </a>
    </>
  );
};
