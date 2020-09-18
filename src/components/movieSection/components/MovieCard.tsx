import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { DropdownMenu } from '../../dropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../../dropdownMenu/DropdownMenuItem';
import { Movie } from '../../../models/movie/movie.model';
import { useToggle } from '../../../hooks/index';
import { join } from '../../../helpers/utils';
import './MovieCard.scss';

type Props = {
  cardData: Movie,
  handlerOpenDeleteModal: (id: number) => void,
  handlerOpenMovieModal: (movie: Movie) => void
}

export const MovieCard = ({
  cardData,
  handlerOpenMovieModal,
  handlerOpenDeleteModal }: Props): JSX.Element => {
  const [isShowDropdown, toggleShowDropdown] = useToggle();

  const deleteMovieCard = useCallback(():void => {
    handlerOpenDeleteModal(cardData.id);
  }, [cardData]);

  const openMovieCardModal = useCallback(():void => {
    handlerOpenMovieModal(cardData);
  }, [cardData]);

  const { id, imgSrc, title, releaseDate, genre } = cardData;

  return (
    <div
      className="move-card"
      onMouseEnter={toggleShowDropdown}
      onMouseLeave={toggleShowDropdown}
    >
      {isShowDropdown ? (
        <DropdownMenu>
          <DropdownMenuItem
            handlerClick={openMovieCardModal}
            title="edit"
            />
          <DropdownMenuItem
            handlerClick={deleteMovieCard}
            title="delete"
            />
        </DropdownMenu>
      ) : null}
      <div className="move-card__img">
        <Link to={`/details/${id}`}>
          <img src={imgSrc} alt="poster" />
        </Link>
      </div>
      <div className="move-card__info">
        <div className="info__title-date">
          <span className="info__title">{title}</span>
          <span className="info__release-date">{releaseDate}</span>
        </div>
        <p className="info__genre">
          {join(genre)}
        </p>
      </div>
    </div>
  );
};
