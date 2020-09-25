import { ChangeEvent } from 'react';

type Props = {
  title: string,
  type?: string,
  name?: string,
  placeholder?: string,
  value?: any,
  errors?: string,
  handlerChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const MovieModalItem = ({
  title, placeholder, errors, type = 'text',
  value, name, handlerChange,
}: Props): JSX.Element => {
  const initValue = Array.isArray(value) ? value.join(', ') : value;

  return (
    <div className="movie-modal-wrapper">
      <p className="movie-modal-title">{title}</p>
      <input className="movie-modal-item" type={type} placeholder={placeholder} name={name} value={initValue} onChange={handlerChange} />
      {errors ? (
        <div className="error">
          <p>{errors}</p>
        </div>
      ) : null}
    </div>
  );
};
