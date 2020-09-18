import { useDispatch } from 'react-redux';
import { TopSection } from '../../containers/TopSection';
import { HomeSearchSection } from './components/HomeSearchSection';
import { withModals } from '../../hoc/withModals';
import { Movie } from '../../../models/movie.model';
import * as MovieActions from '../../../store/movies/actions';
import './HomeTopSection.scss';

export const HomeTopSection = (): JSX.Element => {
  const dispatch = useDispatch();
  const HomeSearchSectionWithModal = withModals(HomeSearchSection);
  const handlerSubmit = (movie: Movie) => {
    dispatch(MovieActions.addMovie(movie));
  };
  return (
    <div className="home-page">
      <TopSection>
        <HomeSearchSectionWithModal onSubmit={handlerSubmit} />
      </TopSection>
    </div>
  );
};
