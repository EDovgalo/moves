import React, { Component } from 'react';
import { MovieCard } from '../components/MovieCard';
import './MoviesList.scss';

import imgOne from '../../../../assets/images/1.jpg';
import imgTwo from '../../../../assets/images/2.jpg';
import imgThree from '../../../../assets/images/3.jpg';
import imgFour from '../../../../assets/images/4.jpg';
import imgFive from '../../../../assets/images/5.jpg';
import imgSix from '../../../../assets/images/6.jpg';
import { LoadSpinner } from '../../../components/LoadSpinner';


export enum GenreTypes {
    Action = 'Action',
    Drama = 'Drama',
    OscarWinning = 'Oscar winning',
    Adventure = 'Adventure',
    Music = 'Music'
}

export interface IMove {
    id: number;
    title: string;
    genre: Array<GenreTypes>
    releaseDate: string,
    imgSrc: string
}

type State = {
    isLoadingMovesList: boolean;
}

export class MoviesList extends Component<any, State> {

    state = {
        isLoadingMovesList: true,
    };

    moves: Array<IMove> = [
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

    componentDidMount(): void {
        this.loadMoves();
    }

    render() {
        return (
            <LoadSpinner isLoading={this.state.isLoadingMovesList}>
                <div className="moves">
                    <p className="moves__total">
                        <b>{this.moves.length}</b> moves found
                    </p>
                    {this.renderMoves()}
                </div>
            </LoadSpinner>
        );
    }

    renderMoves() {
        return <div className="moves__list">
            {this.moves.map((item) => (
                <MovieCard key={item.id} {...item} />
            ))}
        </div>;
    }

    private loadMoves() {
        setTimeout(() => {
            this.setState({ isLoadingMovesList: false });
        }, 3000);
    }
}
