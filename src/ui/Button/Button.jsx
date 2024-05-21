import clsx from 'clsx';
import s from './Button.module.scss';

export const Button = ({ children, type, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(s.button, {
        [s.button_primary]: variant === 'primary',
        [s.button_secondary]: variant === 'secondary',
        [s.button_light]: variant === 'light',
        [s.button_bigPrimary]: variant === 'bigPrimary',
      })}
    >
      {children}
    </button>
  );
};
