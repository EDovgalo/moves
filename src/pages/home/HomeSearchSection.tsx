import React, { useState } from 'react';
import { TopSection } from '../../containers/TopSection';
import { AppLabel } from '../../components/AppLabel';
import { Search } from '../../components/movieSection/components/Search';
import { MovieModal } from '../../components/modal/movieModal/MovieModal';
import { Movie } from '../../models/movie/movie.model';
import './HomeSearchSection.scss';

export const HomeSearchSection = (): JSX.Element => {
  const [isShowMovieModal, setIsShowMovieModal] = useState(false);

  const toggleMovieModal = () => {
    setIsShowMovieModal(!isShowMovieModal);
  };

  return (
    <div className="home-page">
      <MovieModal
        handlerClose={toggleMovieModal}
        handlerSubmit={null}
        data={new Movie()}
        isShow={isShowMovieModal}
        />
      <TopSection>
        <div className="header">
          <AppLabel />
          <button onClick={toggleMovieModal} type="button" className="header__btn--add add-btn">
            + add movie
          </button>
        </div>
        <Search title="find your movie" placeholder="What do you want to watch?" />
      </TopSection>
    </div>
  );
};
