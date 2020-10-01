import { TopSection } from '../../../shared/topSection/TopSection';
import { DetailsPageTopSection } from './DetailsPageTopSection';
import { AppLabel } from '../../../shared/AppLabel';
import { Movie } from '../../../../models/movie.model';
import { NotFound } from '../../notFound/NotFound';
import { LoadSpinner } from '../../../shared/loadSpiner/LoadSpinner';
import './MovieDetails.scss';

type Props ={
  movie: Movie,
  isLoading: boolean
}

export const MovieDetails = ({ movie, isLoading }: Props): JSX.Element => (
  <div className="details-page">
    <TopSection>
      <div className="details-page__top-section-header">
        <AppLabel />
        <button className="details-page__search-btn" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
      <LoadSpinner isLoading={isLoading}>
        {movie ? <DetailsPageTopSection movie={movie} /> : <NotFound title="Movie" />}
      </LoadSpinner>
    </TopSection>
  </div>
);
