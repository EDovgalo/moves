import { Movie } from '../../../models/movie/movie.model';
import { Rating } from './Rating';
import { join } from '../../../helpers/utils';
import './DetailsPageTopSection.scss';

type Props = {
  movie: Movie
}

export const DetailsPageTopSection = ({ movie }: Props): JSX.Element => {
  const {
    title,
    genre,
    releaseDate,
    imgSrc,
    duration,
    description,
    rating,
  } = movie;
  return (
    <div className="details-page-top-section">
      <div className="top-section__img">
        <img alt="cover" src={imgSrc} />
      </div>
      <div className="top-section__body">
        <div className="row">
          <h5 className="top-section__title">{title}</h5>
          <Rating rating={rating} />
        </div>
        <h6 className="top-section__genres">{join(genre)}</h6>
        <div className="row release-duration">
          <span className="top-section__label">{releaseDate}</span>
          <span className="top-section__duration">{`${duration} min`}</span>
        </div>
        <p className="top-section__description">{description}</p>
      </div>
    </div>
  );
};
