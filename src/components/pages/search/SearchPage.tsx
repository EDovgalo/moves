import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { HomeTopSection } from '../home/HomeTopSection';
import { clearMovies, setQueryParams } from '../../../store/movies/actions';

export const SearchPage = (): JSX.Element => {

  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    if (searchTerm) {
      dispatch(setQueryParams({ search: searchTerm }));
    } else {
      dispatch(clearMovies());
    }
  }, [dispatch, searchTerm]);

  return (
    <>
      <HomeTopSection searchTerm={searchTerm} />
    </>
  );
};
