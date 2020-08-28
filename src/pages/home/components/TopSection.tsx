import { Search } from './Search';
import './TopSection.scss';
import { AppLabel } from '../../../components/AppLabel';

type Props = {
    handlerOpenMovieModal: any
};

export const TopSection = ({ handlerOpenMovieModal }: Props) => {

    return (
        <div className="top-section">
            <div className="header">
                <AppLabel/>
                <button className="header__btn--add add-btn" onClick={handlerOpenMovieModal.bind(null, null)}>+ add movie</button>
            </div>
            <Search title="find your movie" placeholder="What do you want to watch?"/>
        </div>
    );

};
