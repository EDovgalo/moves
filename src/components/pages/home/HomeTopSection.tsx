import { useDispatch, connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router';
import { useCallback } from 'react';
import { TopSection } from '../../shared/topSection/TopSection';
import { AppLabel } from '../../shared/AppLabel';
import { Search } from '../../shared/movieSection/components/Search';
import { Movie } from '../../../models/movie.model';
import { clearMovies, fetchMovies, setEditMovie } from '../../../store/movies/actions';
import './HomeTopSection.scss';

type OwnProps = {
  searchValue: string
}

const mapStateToProps = (state, { searchValue }: OwnProps) => ({
  isLoading: state.movies.isLoading,
  searchValue,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

export const HomeTopSection = ({ searchValue = '' }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handlerOpenAddModal = useCallback(() => {
    dispatch(setEditMovie(
      new Movie(null, '', '', '', 0),
    ));
  }, [dispatch]);

  const handlerSearch = useCallback((search: string) => {
    if (search) {
      dispatch(fetchMovies({ search, searchBy: 'title' }));
    } else {
      dispatch(clearMovies());
    }
    history.push(`../search?q=${search}`);
  }, [dispatch, history]);

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
          searchValue={searchValue || ''}
          onSearch={handlerSearch}
          title="find your movie"
          placeholder="What do you want to watch?"
          />
      </TopSection>
    </div>
  );
};
