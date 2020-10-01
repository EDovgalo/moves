import { useFormik } from 'formik';
import * as moment from 'moment';

import { validationSchema } from './validation.schema';
import { MovieModalItem } from './MovieModalItem';
import { Movie } from '../../../../models/movie.model';
import './MovieModal.scss';

type Props = {
  onSubmit: (movie?: Movie) => void,
  modalTitle?: string,
  data: Movie
}

export const MovieModal = ({
  data,
  onSubmit,
}: Props): JSX.Element => {
  const { handleSubmit, handleChange, handleReset, values, errors } = useFormik({
    initialValues: { ...data },
    validationSchema,
    validateOnChange: false,

    onSubmit: v => {
      const value = { ...v };
      value.genres = value.genres.split ? value.genres.split(', ') : value.genres;
      value.release_date = moment(value.release_date).format('yyyy-MM-DD');
      onSubmit(value);
    },
  });

  return (
    <form className="movie-modal__body" onSubmit={handleSubmit}>
      <MovieModalItem
        title="title"
        name="title"
        value={values.title}
        handlerChange={handleChange}
        errors={errors.title}
        />
      <MovieModalItem
        title="release date"
        name="release_date"
        placeholder="yyyy-mm-dd"
        value={values.release_date}
        handlerChange={handleChange}
        errors={errors.release_date}
        />

      <MovieModalItem
        title="movie url"
        name="poster_path"
        value={values.poster_path}
        handlerChange={handleChange}
        errors={errors.poster_path}
        />
      <MovieModalItem
        title="genres"
        name="genres"
        value={values.genres}
        handlerChange={handleChange}
        errors={errors.genres as string}
        />
      <MovieModalItem
        title="overview"
        name="overview"
        value={values.overview}
        handlerChange={handleChange}
        errors={errors.overview}
        />
      <MovieModalItem
        title="runtime"
        name="runtime"
        value={values.runtime}
        handlerChange={handleChange}
        errors={errors.runtime}
        type="number"
        />

      <div className="movie-modal-controls">
        <button
          type="button"
          className="add-btn movie-modal-controls__btn--reset"
          onClick={handleReset}
        >
          reset
        </button>
        <button
          type="submit"
          className="add-btn pink-button"
        >
          submit
        </button>
      </div>
    </form>
  );
};
