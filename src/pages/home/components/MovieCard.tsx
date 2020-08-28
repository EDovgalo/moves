import { Component } from 'react';
import { IMovie } from '../HomePage';
import { DropdownMenu } from '../../../components/dropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../../../components/dropdownMenu/DropdownMenuItem';
import './MovieCard.scss';

type State = {
    isShowDropdown: boolean
}

type Props = {
    cardData: IMovie,
    handlerOpenDeleteModal: any,
    handlerOpenMovieModal: any
}

export class MovieCard extends Component<Props, State> {

    state = {
        isShowDropdown: false,
    };

    handleCardMouseEnter = () => {
        this.setState({ isShowDropdown: true });
    };

    handleCardMouseLeave = () => {
        this.setState({ isShowDropdown: false });
    };

    render() {
        const { id, imgSrc, title, releaseDate, genre } = this.props.cardData;
        const { handlerOpenDeleteModal, handlerOpenMovieModal } = this.props;
        const { isShowDropdown } = this.state;

        return <div className="move-card"
                    onMouseEnter={this.handleCardMouseEnter}
                    onMouseLeave={this.handleCardMouseLeave}>

            {isShowDropdown ? <DropdownMenu>
                <DropdownMenuItem
                    handlerClick={handlerOpenMovieModal.bind(null, this.props.cardData)} title='edit'/>
                <DropdownMenuItem
                    handlerClick={handlerOpenDeleteModal.bind(null, id)} title='delete'/>
            </DropdownMenu> : null}

            <div className="move-card__img">
                <img src={imgSrc} alt="poster"/>
            </div>
            <div className="move-card__info">
                <div className="info__title-date">
                    <span className="info__title">{title}</span>
                    <span className="info__release-date">{releaseDate}</span>
                </div>

                <p className="info__genre">
                    {genre.map((item, index) => index ? `, ${item}` : item)}
                </p>

            </div>
        </div>;
    }
}
