import React from 'react';

type Props = {
  title: string,
  onClick?: any
}

export const DropdownMenuItem = ({ title, onClick }: Props): JSX.Element => (
  <li
    role="presentation"
    className="list-items__item"
    onClick={onClick}
  >
    {title}
  </li>
);
