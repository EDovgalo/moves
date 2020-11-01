import React from 'react';
import './TopSection.scss';

type Props = {
  children: JSX.Element | JSX.Element []
};

export const TopSection = ({ children }: Props): JSX.Element => (
  <div className="top-section">
    {children}
  </div>
);
