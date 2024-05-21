import { createPortal } from 'react-dom';
import s from './Portal.module.scss';

export const Portal = ({ children, container = document.body }) =>
  createPortal(children, container);
