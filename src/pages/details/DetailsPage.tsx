import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { TopSection } from '../../containers/TopSection';
import { MovieSection } from '../../components/movieSection/MovieSection';
import { AppFooter } from '../../components/AppFooter';
import { DetailsPageTopSection } from './components/DetailsPageTopSection';
import { getMovieById } from '../../data/movies';
import { AppLabel } from '../../components/AppLabel';
import './DetailsPage.scss';

export const DetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setMovie(getMovieById(id));
  }, [id]);

  const redirectOnHome = () => {
    const path = '../home';
    history.push(path);
  };

  return (
    <div className="details-page">
      <TopSection>
        <div className="details-page__top-section-header">
          <AppLabel />
          <button className="details-page__search-btn" type="button" onClick={redirectOnHome}>
            <i className="fa fa-search" />
          </button>
        </div>
        {movie ? <DetailsPageTopSection movie={movie} /> : null}
      </TopSection>
      <MovieSection />
      <AppFooter />
    </div>
  );
};
