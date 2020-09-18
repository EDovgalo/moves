import { Movie } from '../../../../models/movie.model';
import { Rating } from './Rating';
import { join } from '../../../../helpers/utils';
import './DetailsPageTopSection.scss';

type Props = {
  movie: Movie
}

export const DetailsPageTopSection = ({ movie }: Props): JSX.Element => {
  const {
    title,
    genres,
    release_date,
    poster_path,
    runtime,
    overview,
    vote_average,
  } = movie;
  return (
    <div className="details-page-top-section">
      <div className="top-section__img">
        <img alt="cover" src={poster_path} />
      </div>
      <div className="top-section__body">
        <div className="row">
          <h5 className="top-section__title">{title}</h5>
          <Rating rating={vote_average} />
        </div>
        <h6 className="top-section__genres">{join(genres)}</h6>
        <div className="row release-duration">
          <span className="top-section__label">{release_date}</span>
          <span className="top-section__duration">{`${runtime} min`}</span>
        </div>
        <p className="top-section__description">{overview}</p>
      </div>
    </div>
  );
};
