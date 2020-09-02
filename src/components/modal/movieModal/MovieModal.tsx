import { ChangeEvent, useEffect, useState } from 'react';
import { MovieModalItem } from './MovieModalItem';
import { ModalContainer } from '../ModalContainer';
import { Movie } from '../../../pages/home/HomePage';
import './MovieModal.scss';

type Props = {
  handlerClose: () => void,
  handlerSubmit: () => void,
  isShow: boolean,
  modalTitle?: string,
  data: Movie
}

export const MovieModal = ({
  data,
  handlerClose,
  isShow,
  modalTitle = 'add movie',
}: Props):JSX.Element => {
  const [movieData, setMovieData] = useState(data);

  useEffect(() => {
    setMovieData(data);
  }, [data]);

  const handlerChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const change = { ...movieData };
    const { name, value } = e.target;
    change[name] = value;
    setMovieData(change);
  };

  const handlerRest = () => {
    setMovieData(data);
  };

  return (
    <ModalContainer isShow={isShow} modalTitle={modalTitle} handlerClose={handlerClose}>

      <div className="movie-modal__body">
        <MovieModalItem
          title="title"
          name="title"
          value={movieData ? movieData.title : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="release date"
          name="releaseDate"
          value={movieData ? movieData.releaseDate : ''}
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="movie url"
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="genre"
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="overview"
          handlerChange={handlerChangeData}
          />
        <MovieModalItem
          title="runtime"
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
        >
          submit
        </button>
      </div>
    </ModalContainer>
  );
};
