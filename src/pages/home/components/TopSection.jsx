import { Search } from './Search';
import { Header } from './Header';
import './TopSection.scss';

export const TopSection = () => {

    return (
        <div className="top-section">
            <Header/>
            <Search title="find your movie" placeholder="What do you want to watch?"/>
        </div>
    );

};
