import { ChangeEvent } from 'react';

type Props = {
  title: string,
  name?: string,
  value?: string,
  handlerChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const MovieModalItem = ({ title, value, name, handlerChange }: Props): JSX.Element => (
  <div className="movie-modal-wrapper">
    <p className="movie-modal-title">{title}</p>
    <input className="movie-modal-item" name={name} value={value} onChange={handlerChange} />
  </div>
);
