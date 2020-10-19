import React, { useEffect, useState } from 'react';
import './Search.scss';

type Props = {
  placeholder?: string,
  title?: string,
  searchValue?: string
  onSearch: (value: string) => void
}

export const Search = ({ title, placeholder, onSearch, searchValue }: Props): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState(searchValue || '');
  useEffect(() => {
    setSearchQuery(searchValue || '');
  }, [searchValue]);

  const handlerSearch = e => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handlerSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  return (
    <form className="search" onSubmit={handlerSearch}>
      <div className="wrapper">
        <h4 className="search__title">{title}</h4>
        <input
          value={searchQuery}
          onChange={handlerSearchInput}
          className="search__input"
          placeholder={placeholder}
          />
        <button type="submit" onClick={handlerSearch} className="search__btn--search add-btn">
          search
        </button>
      </div>
    </form>
  );
};
