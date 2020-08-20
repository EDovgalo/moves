import { IMove } from '../containers/MoviesList';
import './MovieCard.scss';

export const MovieCard = (props: IMove) => {
    return <div className="move-card">
        <div className="move-card__img">
            <img src={props.imgSrc} alt="poster"/>
        </div>
        <div className="move-card__info">
            <div className="info__title-date">
                <span className="info__title">{props.title}</span>
                <span className="info__release-date">{props.releaseDate}</span>
            </div>
            <p className="info__genre">
                {props.genre.map((item, index) => index ? `, ${item}` : item)}
            </p>
        </div>
    </div>;
};
