import React, { Component } from 'react';
import { TopSection } from './components/TopSection';
import { MoviesList } from './containers/MoviesList';
import { Filters } from './components/Filters';
import imgOne from '../../../assets/images/1.jpg';
import imgTwo from '../../../assets/images/2.jpg';
import imgThree from '../../../assets/images/3.jpg';
import imgFour from '../../../assets/images/4.jpg';
import imgFive from '../../../assets/images/5.jpg';
import imgSix from '../../../assets/images/6.jpg';
import './HomePage.scss';
import { LoadSpinner } from '../../components/LoadSpinner';
import { DeleteMovieModal } from '../../components/modal/deleteMovieModal/DeleteMovieModal';
import { MovieModal } from '../../components/modal/movieModal/MovieModal';


export enum GenreTypes {
    Action = 'Action',
    Drama = 'Drama',
    OscarWinning = 'Oscar winning',
    Adventure = 'Adventure',
    Music = 'Music'
}

export interface IMovie {
    id: number;
    title: string;
    genre: Array<GenreTypes>
    releaseDate: string,
    imgSrc: string
}

const movies: Array<IMovie> = [
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
    movies: Array<IMovie>,
    activeFilter: string,
    sortBy: string,
    isShowDeleteModal: boolean,
    isShowMovieModal: boolean,
    deleteCardId: number,
    editCardMovie: IMovie,
    isLoadingMovesList: boolean
}

export class HomePage extends Component<{}, State> {


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
        movies: movies,
        activeFilter: this.filters[0],
        sortBy: null,
        isShowDeleteModal: false,
        isShowMovieModal: false,
        deleteCardId: null,
        editCardMovie: null,
        isLoadingMovesList: true
    };

    componentDidMount() {
        this.loadMoves()
    }

    setActiveFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState({ activeFilter: value });
    };

    changeSortValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState({
            sortBy: value,
        }, () => {
            this.sortMovieList();
        });
    };

    openDeleteModal = cardId => {
        this.setState({ isShowDeleteModal: true, deleteCardId: cardId });
    };

    closeDeleteModal = () => {
        this.setState({ isShowDeleteModal: false, deleteCardId: null });
    };

    openMovieModal = editCardMovie => {
        this.setState({ isShowMovieModal: true, editCardMovie });
    };

    closeMovieModal = () => {
        this.setState({ isShowMovieModal: false, editCardMovie: null });
    };

    deleteCard = () => {
        const { movies, deleteCardId } = this.state;
        const newMovies = movies.filter(item => item.id !== deleteCardId);
        this.setState({ movies: newMovies, isShowDeleteModal: false, deleteCardId: null });
    };

    render() {
        const {
            movies,
            activeFilter,
            isShowDeleteModal,
            isShowMovieModal,
            editCardMovie,
            isLoadingMovesList
        } = this.state;
        return (
            <>
                <DeleteMovieModal handlerClose={this.closeDeleteModal}
                                  handleConfirm={this.deleteCard}
                                  isShow={isShowDeleteModal}/>

                <MovieModal handlerClose={this.closeMovieModal}
                            handlerSubmit={null}
                            data={editCardMovie}
                            isShow={isShowMovieModal}/>

                <div className="home-page">
                    <TopSection handlerOpenMovieModal={this.openMovieModal}/>
                    <Filters filters={this.filters} sortList={this.sortList} activeFilter={activeFilter}
                             handlerFilterClick={this.setActiveFilter} handlerChangeSortValue={this.changeSortValue}/>
                    <LoadSpinner isLoading={isLoadingMovesList}>
                        <MoviesList moves={movies}
                                    handlerOpenMovieModal={this.openMovieModal}
                                    handlerOpenDeleteModal={this.openDeleteModal}/>
                    </LoadSpinner>
                </div>
            </>
        );
    }

    private sortMovieList() {
        const { movies } = this.state;
        movies.sort(this.comparator);
        this.setState({ movies: [...movies] });
    }

    private comparator = (a, b) => {
        const { sortBy } = this.state;
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
        return 0;
    };

    private loadMoves() {
        setTimeout(() => {
            this.setState({ isLoadingMovesList: false });
        }, 1000);
    }

}
