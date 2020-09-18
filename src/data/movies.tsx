import imgOne from '../../assets/images/1.jpg';
import imgTwo from '../../assets/images/2.jpg';
import imgThree from '../../assets/images/3.jpg';
import imgFour from '../../assets/images/4.jpg';
import imgFive from '../../assets/images/5.jpg';
import imgSix from '../../assets/images/6.jpg';

import { Movie } from '../models/movie/movie.model';
import { GenreTypes } from '../models/movie/genre.model';

export const moviesArray: Array<Movie> = [
  {
    id: 1,
    title: 'Pulp Function',
    genre: [GenreTypes.Action],
    releaseDate: '2004',
    imgSrc: imgOne,
    rating: 3,
    duration: 120,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
      + "industry. Lorem Ipsum has been the industry's standard dummy text ever since "
      + 'the 1500s, when an unknown printer took a galley of type and scrambled it t'
      + 'o make a type specimen book. It has survived not only five centuries, but also the'
      + ' leap into electronic typesetting, remaining essentially unchanged. It was'
      + ' popularised in the 1960s with the release of Letraset sheets containing Lo'
      + 'rem Ipsum passages, and more recently with desktop publishing software like'
      + ' Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 2,
    title: 'Bohenian Rhapsody',
    genre: [GenreTypes.Music, GenreTypes.Drama],
    releaseDate: '2003',
    imgSrc: imgTwo,
    rating: 3.5,
    duration: 79,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
      + "industry. Lorem Ipsum has been the industry's standard dummy text ever since "
      + 'the 1500s, when an unknown printer took a galley of type and scrambled it t'
      + 'o make a type specimen book. It has survived not only five centuries, but also the'
      + ' leap into electronic typesetting, remaining essentially unchanged. It was'
      + ' popularised in the 1960s with the release of Letraset sheets containing Lo'
      + 'rem Ipsum passages, and more recently with desktop publishing software like'
      + ' Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 3,
    title: 'Kill Bill',
    genre: [GenreTypes.Music, GenreTypes.OscarWinning],
    releaseDate: '1994',
    imgSrc: imgThree,
    rating: 4.2,
    duration: 133,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
      + "industry. Lorem Ipsum has been the industry's standard dummy text ever since "
      + 'the 1500s, when an unknown printer took a galley of type and scrambled it t'
      + 'o make a type specimen book. It has survived not only five centuries, but also the'
      + ' leap into electronic typesetting, remaining essentially unchanged. It was'
      + ' popularised in the 1960s with the release of Letraset sheets containing Lo'
      + 'rem Ipsum passages, and more recently with desktop publishing software like'
      + ' Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 4,
    title: 'Avengers',
    genre: [GenreTypes.Action, GenreTypes.Adventure],
    releaseDate: '2004',
    imgSrc: imgFour,
    rating: 2,
    duration: 120,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
      + "industry. Lorem Ipsum has been the industry's standard dummy text ever since "
      + 'the 1500s, when an unknown printer took a galley of type and scrambled it t'
      + 'o make a type specimen book. It has survived not only five centuries, but also the'
      + ' leap into electronic typesetting, remaining essentially unchanged. It was'
      + ' popularised in the 1960s with the release of Letraset sheets containing Lo'
      + 'rem Ipsum passages, and more recently with desktop publishing software like'
      + ' Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 5,
    title: 'Inception',
    genre: [GenreTypes.Action, GenreTypes.Adventure],
    releaseDate: '2003',
    imgSrc: imgFive,
    rating: 5,
    duration: 120,
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    genre: [GenreTypes.OscarWinning],
    releaseDate: '2003',
    imgSrc: imgSix,
    duration: 120,
  },
];

export const getMovieById = (id: number): Movie => moviesArray.find(item => item.id === +id);
