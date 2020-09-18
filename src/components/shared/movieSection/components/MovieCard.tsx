import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../../../models/movie.model';
import { join } from '../../../../helpers/utils';
import { DefaultImage } from '../../DefaultImage';
import { DropdownMenu } from '../../dropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../../dropdownMenu/DropdownMenuItem';
import { useToggle } from '../../../../hooks';
import './MovieCard.scss';

type Props = {
  movie: Movie,
  onOpenEditModal?: (movie: Movie) => void,
  onOpenDeleteModal?: (movie: Movie) => void,
}

const renderDropDown = (onOpenEditModal, onOpenDeleteModal) => (
  <DropdownMenu>
    <DropdownMenuItem
      onClick={onOpenEditModal}
      title="edit"
      />
    <DropdownMenuItem
      onClick={onOpenDeleteModal}
      title="delete"
      />
  </DropdownMenu>
);

export const MovieCard = React.memo(({ movie,
  onOpenDeleteModal, onOpenEditModal }: Props): JSX.Element => {
  const { id, poster_path, title, release_date, genres } = movie;
  const [isShowDropDown, toggleShowDropDown] = useToggle(false);

  const showDropDown = () => {
    if (!isShowDropDown) {
      toggleShowDropDown();
    }
  };

  const handlerOpenDeleteModal = useCallback(() => {
    onOpenDeleteModal(movie);
  }, [onOpenDeleteModal]);

  const handlerOpenEditModal = useCallback(() => {
    onOpenEditModal(movie);
  }, [onOpenEditModal]);

  return (
    <div
      className="move-card"
      onFocus={showDropDown}
      onMouseEnter={(toggleShowDropDown)}
      onMouseLeave={toggleShowDropDown}
    >
      {isShowDropDown ? renderDropDown(handlerOpenEditModal, handlerOpenDeleteModal) : null}
      <div className="move-card__img">
        <Link to={`/details/${id}`}>
          <DefaultImage src={poster_path} alt="poster" />
        </Link>
      </div>
      <div className="move-card__info">
        <div className="info__title-date">
          <span className="info__title">{title}</span>
          <span className="info__release-date">{release_date}</span>
        </div>
        <p className="info__genre">
          {join(genres)}
        </p>
      </div>
    </div>
  );
});
