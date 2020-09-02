import { Search } from './Search';
import './TopSection.scss';
import { AppLabel } from '../../../components/AppLabel';

type Props = {
  handlerOpenMovieModal: () => void
};

export const TopSection = ({ handlerOpenMovieModal }: Props): JSX.Element => (
  <div className="top-section">
    <div className="header">
      <AppLabel />
      <button type="button" className="header__btn--add add-btn" onClick={handlerOpenMovieModal}>
        + add movie
      </button>
    </div>
    <Search title="find your movie" placeholder="What do you want to watch?" />
  </div>
);
