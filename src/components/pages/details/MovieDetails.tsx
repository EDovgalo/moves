import { useParams, useHistory } from 'react-router';
import { useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { TopSection } from '../../shared/topSection/TopSection';
import { DetailsPageTopSection } from './components/DetailsPageTopSection';
import { AppLabel } from '../../shared/AppLabel';
import './MovieDetails.scss';
import { findById } from '../../../helpers/utils';

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

const MovieDetails = ({ movies }: Props): JSX.Element => {
  const { id } = useParams();
  const history = useHistory();
  const movie = useMemo(() => findById(movies, id), [id, movies]);

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
    </div>
  );
};

export default connector(MovieDetails);
