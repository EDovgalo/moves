import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TopSection } from '../../shared/topSection/TopSection';
import { AppLabel } from '../../shared/AppLabel';
import { Search } from '../../shared/movieSection/components/Search';
import { Movie } from '../../../models/movie.model';
import { setEditMovie } from '../../../store/movies/actions';
import './HomeTopSection.scss';

type Props = {
  searchTerm?: string
}

export const HomeTopSection = ({ searchTerm = '' }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerOpenAddModal = useCallback(() => {
    dispatch(setEditMovie(
      new Movie(null, '', '', '', 0),
    ));
  }, [dispatch]);

  const handlerSearch = useCallback((search: string) => {
    history.push(`../search/${search}`);
  }, [history]);

  return (
    <div className="home-page">
      <TopSection>
        <div className="header">
          <AppLabel />
          <button onClick={handlerOpenAddModal} type="button" className="header__btn--add add-btn">
            + add movie
          </button>
        </div>
        <Search
          searchValue={searchTerm}
          onSearch={handlerSearch}
          title="find your movie"
          placeholder="What do you want to watch?"
          />
      </TopSection>
    </div>
  );
};
