import * as Yup from 'yup';
import * as moment from 'moment';

export const validationSchema = Yup.object({
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
