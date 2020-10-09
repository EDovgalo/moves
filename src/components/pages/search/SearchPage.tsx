import { connect, ConnectedProps } from 'react-redux';
import { useLocation } from 'react-router';
import MovieSection from '../../shared/movieSection/MovieSection';
import { HomeTopSection } from '../home/HomeTopSection';

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const SearchPage = ({ movies }: Props) => {
  const location = useLocation();
  const searchString = new URLSearchParams(location.search).get('q');

  return (
    <>
      <HomeTopSection searchValue={searchString} />
      <MovieSection moviesList={movies || []} />
    </>
  );
};

export default connector(SearchPage);
