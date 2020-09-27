import './Rating.scss';

type Props = {
  rating: number
}

export const Rating = ({ rating }: Props): JSX.Element => (
  <div className="rating">
    <span className="rating__value">{rating}</span>
  </div>
);
