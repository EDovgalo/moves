import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as moment from 'moment';

import { MovieModalItem } from './MovieModalItem';
import { ModalContainer } from '../ModalContainer';
import { Movie } from '../../../../models/movie.model';
import './MovieModal.scss';

type Props = {
  onClose: () => void,
  onSubmit: (movie?: Movie) => void,
  modalTitle?: string,
  data: Movie
}

const defaultMovie = new Movie(null, '', '', '', 0);

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Title required'),
  poster_path: Yup.string()
    .matches(
      /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&/=]*)?/gi,
      'Enter correct movie url!',
    )
    .nullable()
    .required('Please enter movie url'),
  genres: Yup.string()
    .required('Please enter genres')
    .nullable(),
  release_date: Yup.string()
    .test('release_date', 'should be ISO date', value => moment(value).isValid())
    .required('Date required'),
  overview: Yup.string()
    .required('Overview required'),
  runtime: Yup.number()
    .moreThan(0, 'Should be  greater than 0')
    .required('Runtime required'),
});

export const MovieModal = ({
  data,
  onClose,
  onSubmit,
  modalTitle = 'add movie',
}: Props): JSX.Element => {
  const movieData = data || defaultMovie;

  const { handleSubmit, handleChange, handleReset, values, errors } = useFormik({
    initialValues: { ...movieData },
    validationSchema,
    validateOnChange: false,

    onSubmit: v => {
      const value = { ...v };
      value.genres = value.genres.split ? value.genres.split(', ') : value.genres;
      value.release_date = moment(value.release_date).format('yyyy-MM-DD');
      onSubmit(value);
      onClose();
    },
  });

  return (
    <ModalContainer modalTitle={modalTitle} handlerClose={onClose}>
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
    </ModalContainer>
  );
};
