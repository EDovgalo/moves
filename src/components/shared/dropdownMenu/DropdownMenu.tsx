import React from 'react';
import { useToggle } from '../../../hooks';
import './DropdownMenu.scss';

type Props = {
  caption?: string,
  children: any
};

const defaultCaption = (
  <span className="dropdown-menu__default-caption">
    &#x22EE;
  </span>
);

const renderDropdownMenuBody = (children, onToggle) => (
  <ul className="list-items">
    <li className="list-items__title">
      <button type="button" className="list-items__close" onClick={onToggle}>&#9587;</button>
    </li>
    {children}
  </ul>
);

export const DropdownMenu = ({ children, caption }: Props): JSX.Element => {
  const [isOpen, toggleMenu] = useToggle();

  return (
    <div className="dropdown-menu">
      <button
        type="button"
        className="dropdown-menu__toggle-btn"
        onClick={toggleMenu}
      >
        {caption || defaultCaption}
      </button>
      {isOpen ? renderDropdownMenuBody(children, toggleMenu) : null}
    </div>
  );
};
