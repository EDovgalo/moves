import React, { useState } from 'react';
import './Search.scss';

type Props = {
  placeholder?: string,
  title?: string,
  onSearchQueryChange: (value: string) => void
}

export const Search = ({ title, placeholder, onSearchQueryChange }: Props): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');

  const handlerSearch = () => {
    onSearchQueryChange(searchQuery);
  };

  const handlerSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  return (
    <form className="search">
      <div className="wrapper">
        <h4 className="search__title">{title}</h4>
        <input
          onChange={handlerSearchInput}
          className="search__input"
          placeholder={placeholder}
          />
        <button type="button" onClick={handlerSearch} className="search__btn--search add-btn">
          search
        </button>
      </div>
    </form>
  );
};
