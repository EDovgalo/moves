import { AppLabel } from '../../../shared/AppLabel';
import { Search } from '../../../shared/movieSection/components/Search';
import { Movie } from '../../../../models/movie.model';

type Props = {
  onOpenEditModal: (movie: Movie) => void
}

export const HomeSearchSection = ({ onOpenEditModal }:Props): JSX.Element => {
  const handlerOpenEditModal = () => {
    onOpenEditModal({} as Movie);
  };

  return (
    <>
      <div className="header">
        <AppLabel />
        <button onClick={handlerOpenEditModal} type="button" className="header__btn--add add-btn">
          + add movie
        </button>
      </div>
      <Search title="find your movie" placeholder="What do you want to watch?" />
    </>
  );
};
