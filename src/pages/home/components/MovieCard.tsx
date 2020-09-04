import { Component } from 'react';
import { Movie } from '../HomePage';
import { DropdownMenu } from '../../../components/dropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../../../components/dropdownMenu/DropdownMenuItem';
import './MovieCard.scss';

type State = {
  isShowDropdown: boolean
}

type Props = {
  cardData: Movie,
  handlerOpenDeleteModal: (id: number) => void,
  handlerOpenMovieModal: (movie: Movie) => void
}

export class MovieCard extends Component<Props, State> {
  state = {
    isShowDropdown: false,
  };

  handleCardMouseEnter = (): void => {
    this.setState({ isShowDropdown: true });
  };

  handleCardMouseLeave = (): void => {
    this.setState({ isShowDropdown: false });
  };

  deleteMovieCard = ():void => {
    const { handlerOpenDeleteModal, cardData } = this.props;
    handlerOpenDeleteModal(cardData.id);
  };

  openMovieCardModal = ():void => {
    const { handlerOpenMovieModal, cardData } = this.props;
    handlerOpenMovieModal(cardData);
  };

  render(): JSX.Element {
    const { cardData } = this.props;
    const { isShowDropdown } = this.state;
    const { imgSrc, title, releaseDate, genre } = cardData;
    return (
      <div
        className="move-card"
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}
      >
        {isShowDropdown ? (
          <DropdownMenu>
            <DropdownMenuItem
              handlerClick={this.openMovieCardModal}
              title="edit"
              />
            <DropdownMenuItem
              handlerClick={this.deleteMovieCard}
              title="delete"
              />
          </DropdownMenu>
        ) : null}
        <div className="move-card__img">
          <img src={imgSrc} alt="poster" />
        </div>
        <div className="move-card__info">
          <div className="info__title-date">
            <span className="info__title">{title}</span>
            <span className="info__release-date">{releaseDate}</span>
          </div>
          <p className="info__genre">
            {genre.map((item, index) => (index ? `, ${item}` : item))}
          </p>
        </div>
      </div>
    );
  }
}
