import React, { Component } from 'react';
import { TopSection } from './components/TopSection';
import { MoviesList } from './containers/MoviesList';
import { Filters } from './components/Filters';
import { LoadSpinner } from '../../components/LoadSpinner';
import { DeleteMovieModal } from '../../components/modal/deleteMovieModal/DeleteMovieModal';
import { MovieModal } from '../../components/modal/movieModal/MovieModal';
import { comparator } from '../../helpers/utils';
import './HomePage.scss';

import imgOne from '../../../assets/images/1.jpg';
import imgTwo from '../../../assets/images/2.jpg';
import imgThree from '../../../assets/images/3.jpg';
import imgFour from '../../../assets/images/4.jpg';
import imgFive from '../../../assets/images/5.jpg';
import imgSix from '../../../assets/images/6.jpg';

// eslint-disable-next-line no-shadow
export enum GenreTypes {
  Action = 'Action',
  Drama = 'Drama',
  OscarWinning = 'Oscar winning',
  Adventure = 'Adventure',
  Music = 'Music',
  Default = ''
}

export class Movie {
  constructor(
    public id: number = new Date().valueOf(),
    public title: string = '',
    public genre: Array<GenreTypes> = [GenreTypes.Default],
    public releaseDate: string = '',
    public imgSrc: string = '',
  ) {

  }
}

const moviesArray: Array<Movie> = [
  {
    id: 1,
    title: 'Pulp Function',
    genre: [GenreTypes.Action],
    releaseDate: '2004',
    imgSrc: imgOne,
  },
  {
    id: 2,
    title: 'Bohenian Rhapsody',
    genre: [GenreTypes.Music, GenreTypes.Drama],
    releaseDate: '2003',
    imgSrc: imgTwo,
  },
  {
    id: 3,
    title: 'Kill Bill',
    genre: [GenreTypes.Music, GenreTypes.OscarWinning],
    releaseDate: '1994',
    imgSrc: imgThree,
  },
  {
    id: 4,
    title: 'Avengers',
    genre: [GenreTypes.Action, GenreTypes.Adventure],
    releaseDate: '2004',
    imgSrc: imgFour,
  },
  {
    id: 5,
    title: 'Inception',
    genre: [GenreTypes.Action, GenreTypes.Adventure],
    releaseDate: '2003',
    imgSrc: imgFive,
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    genre: [GenreTypes.OscarWinning],
    releaseDate: '2003',
    imgSrc: imgSix,
  },
];

export type SortList = {
  caption: string,
  value: string
};

type State = {
  movies: Array<Movie>,
  activeFilter: string,
  isShowDeleteModal: boolean,
  isShowMovieModal: boolean,
  deleteCardId: number,
  currentMovie: Movie,
  isLoadingMovesList: boolean
}

export class HomePage extends Component<unknown, State> {
  private filters = [
    'All',
    'Documentary',
    'Comedy',
    'Horror',
    'Crime',
  ];

  private sortList: Array<SortList> = [
    { caption: 'release date', value: 'releaseDate' },
    { caption: 'title', value: 'title' },
    { caption: 'genre', value: 'genre' },
  ];

  state = {
    movies: moviesArray,
    activeFilter: this.filters[0],
    isShowDeleteModal: false,
    isShowMovieModal: false,
    deleteCardId: null,
    currentMovie: null,
    isLoadingMovesList: true,
  };

  componentDidMount(): void {
    this.loadMoves();
  }

  setActiveFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({ activeFilter: value });
  };

  changeSortValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState(state => ({ movies: state.movies.sort(comparator(value)) }));
  };

  openDeleteModal = (cardId: number): void => {
    this.setState({ isShowDeleteModal: true, deleteCardId: cardId });
  };

  closeDeleteModal = (): void => {
    this.setState({ isShowDeleteModal: false, deleteCardId: null });
  };

  editMovie = (currentMovie: Movie): void => {
    this.setState({ isShowMovieModal: true, currentMovie });
  };

  addMovie = (): void => {
    this.setState({ isShowMovieModal: true, currentMovie: new Movie() });
  };

  closeMovieModal = (): void => {
    this.setState({ isShowMovieModal: false, currentMovie: null });
  };

  deleteCard = (): void => {
    const { movies, deleteCardId } = this.state;
    const newMovies = movies.filter(item => item.id !== deleteCardId);
    this.setState({ movies: newMovies, isShowDeleteModal: false, deleteCardId: null });
  };

  private loadMoves() {
    setTimeout(() => {
      this.setState({ isLoadingMovesList: false });
    }, 1000);
  }

  render():JSX.Element {
    const {
      movies,
      activeFilter,
      isShowDeleteModal,
      isShowMovieModal,
      currentMovie,
      isLoadingMovesList,
    } = this.state;
    return (
      <>
        <DeleteMovieModal
          handlerClose={this.closeDeleteModal}
          handleConfirm={this.deleteCard}
          isShow={isShowDeleteModal}
          />

        <MovieModal
          handlerClose={this.closeMovieModal}
          handlerSubmit={null}
          data={currentMovie}
          isShow={isShowMovieModal}
          />

        <div className="home-page">
          <TopSection handlerOpenMovieModal={this.addMovie} />
          <Filters
            filters={this.filters}
            sortList={this.sortList}
            activeFilter={activeFilter}
            handlerFilterClick={this.setActiveFilter}
            handlerChangeSortValue={this.changeSortValue}
            />
          <LoadSpinner isLoading={isLoadingMovesList}>
            <MoviesList
              moves={movies}
              handlerOpenMovieModal={this.editMovie}
              handlerOpenDeleteModal={this.openDeleteModal}
              />
          </LoadSpinner>
        </div>
      </>
    );
  }
}
