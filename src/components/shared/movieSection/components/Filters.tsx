import React from 'react';
import { SortList } from '../MovieSection';
import './Filters.scss';

type Props = {
  filters: Array<{caption: string, value: string}>,
  sortList: Array<SortList>,
  activeFilter: string,
  onGenreChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handlerChangeSortValue
}

export const Filters = ({
  filters, sortList, activeFilter, onGenreChange, handlerChangeSortValue,
}: Props): JSX.Element => (
  <div className="filters">
    <div className="filters-wrapper">
      <ul className="filter-list">
        {filters.map(item => (
          <li
            key={item.caption}
            className={`filter-list__item ${item.value === activeFilter ? 'active-filter' : ''}`}
          >
            <label className="filter-list__title" htmlFor={item.caption}>{item.caption}</label>
            <input
              className="filter-list__radio-btn"
              type="radio"
              name="filter"
              value={item.value}
              id={item.caption}
              onChange={onGenreChange}
              />
          </li>
        ))}

      </ul>
      <div className="filters-sort">
        <span className="filters-sort__title">Sort by</span>
        <select className="filters-sort__select" onChange={handlerChangeSortValue}>
          {sortList.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.caption}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="vertical-line" />
  </div>
);
