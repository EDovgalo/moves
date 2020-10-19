import { Link } from 'react-router-dom';

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
        <Link className="details-page__search-btn" to="/search">
          <i className="fa fa-search" />
        </Link>
      </div>
      <LoadSpinner isLoading={isLoading}>
        {movie ? <DetailsPageTopSection movie={movie} /> : <NotFound title="Movie" />}
      </LoadSpinner>
    </TopSection>
  </div>
);
