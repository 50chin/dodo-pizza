import { createPortal } from 'react-dom';

export const Portal = ({ children, container = document.body }) =>
  createPortal(children, container);
