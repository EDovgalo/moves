import { useCallback } from 'react';
import { AppLabel } from '../../../shared/AppLabel';
import { Search } from '../../../shared/movieSection/components/Search';
import { Movie } from '../../../../models/movie.model';

type Props = {
  onOpenEditModal: (movie: Movie) => void,
  onSearchQueryChange: (value: string) => void
}

export const HomeSearchSection = ({ onOpenEditModal, onSearchQueryChange }: Props): JSX.Element => {
  const handlerOpenEditModal = useCallback(() => {
    onOpenEditModal(null);
  }, [onOpenEditModal]);

  return (
    <>
      <div className="header">
        <AppLabel />
        <button onClick={handlerOpenEditModal} type="button" className="header__btn--add add-btn">
          + add movie
        </button>
      </div>
      <Search
        onSearchQueryChange={onSearchQueryChange}
        title="find your movie"
        placeholder="What do you want to watch?"
        />
    </>
  );
};
