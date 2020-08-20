import './HomePage.scss';
import { TopSection } from './components/TopSection';
import { Filters } from './components/Filters';
import { MoviesList } from './containers/MoviesList';

export const HomePage = () => {
    return (
        <div className="home-page">
            <TopSection/>
            <Filters/>
            <MoviesList/>
        </div>
    );
};
