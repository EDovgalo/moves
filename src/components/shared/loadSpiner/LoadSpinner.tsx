import React from 'react';
import './LoadSpinner.scss';

type Props = {
  children: JSX.Element
  isLoading: boolean
}

export const LoadSpinner = ({ children, isLoading }: Props): JSX.Element => {
  const loadSpinner = (
    <div className="load-container">
      <div className="lds-dual-ring" />
    </div>
  );
  return isLoading ? loadSpinner : children;
};
