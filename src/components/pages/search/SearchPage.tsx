import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { HomeTopSection } from '../home/HomeTopSection';
import { clearMovies, setQueryParams } from '../../../store/movies/actions';

export const SearchPage = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchTerm = new URLSearchParams(location.search).get('q');

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
