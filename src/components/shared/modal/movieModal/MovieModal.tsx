import { ChangeEvent, useState } from 'react';
import { MovieModalItem } from './MovieModalItem';
import { ModalContainer } from '../ModalContainer';
import { Movie } from '../../../../models/movie.model';
import './MovieModal.scss';

type Props = {
  onClose: () => void,
  onSubmit: (movie?: Movie) => void,
  isShow: boolean,
  modalTitle?: string,
  data: Movie
}

const joinGenres = (genres: string[]) => {
  if (Array.isArray(genres)) {
    return genres.join(', ');
  }
  return genres;
};

export const MovieModal = ({
  data = {} as Movie,
  onClose,
  onSubmit,
  isShow,
  modalTitle = 'add movie',
}: Props):JSX.Element => {
  const [movieData, setMovieData] = useState(data);

  const handlerChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const change = { ...movieData };
    const { name, value } = e.target;
    change[name] = value;
    setMovieData(change);
  };

  const handlerRest = () => {
    setMovieData(data);
  };

  const handlerSubmit = () => {
    let movie: Movie;
    if (data.id) {
      movie = movieData;
    } else {
      movie = new Movie(null,
        movieData.title,
        movieData.genres,
        movieData.release_date,
        movieData.poster_path,
        movieData.overview,
        movieData.vote_average,
        movieData.runtime);
    }
    onSubmit(movie);
  };

  return (
    <ModalContainer isShow={isShow} modalTitle={modalTitle} handlerClose={onClose}>

      <div className="movie-modal__body">
        <MovieModalItem
          title="title"
          name="title"
          value={movieData ? movieData.title : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="release date"
          name="release_date"
          value={movieData ? movieData.release_date : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="movie url"
          name="poster_path"
          value={movieData ? movieData.poster_path : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="genres"
          name="genres"
          value={movieData ? joinGenres(movieData.genres) : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="overview"
          name="overview"
          value={movieData ? movieData.overview : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="runtime"
          name="runtime"
          value={movieData ? movieData.runtime : ''}
          handlerChange={handlerChangeData}
          />
      </div>
      <div className="movie-modal-controls">
        <button
          type="button"
          className="add-btn movie-modal-controls__btn--reset"
          onClick={handlerRest}
        >
          reset
        </button>
        <button
          type="button"
          className="add-btn pink-button"
          onClick={handlerSubmit}
        >
          submit
        </button>
      </div>
    </ModalContainer>
  );
};
