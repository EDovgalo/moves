import { useDispatch } from 'react-redux';
import { TopSection } from '../../shared/topSection/TopSection';
import { HomeSearchSection } from './components/HomeSearchSection';
import { withModals } from '../../hoc/withModals';
import { Movie } from '../../../models/movie.model';
import { addMovie, fetchMovies } from '../../../store/movies/actions';
import './HomeTopSection.scss';

export const HomeTopSection = (): JSX.Element => {
  const dispatch = useDispatch();
  const HomeSearchSectionWithModal = withModals(HomeSearchSection);

  const handlerSubmit = (movie: Movie) => {
    dispatch(addMovie(movie));
  };

  const handlerSearch = (search: string) => {
    dispatch(fetchMovies({ search, searchBy: 'title' }));
  };

  return (
    <div className="home-page">
      <TopSection>
        <HomeSearchSectionWithModal onSubmit={handlerSubmit} onSearchQueryChange={handlerSearch} />
      </TopSection>
    </div>
  );
};
