import React, { useEffect } from 'react';

import { useDispatch, connect, ConnectedProps } from 'react-redux';
import { setQueryParams } from '../../../store/movies/actions';
import { HomeTopSection } from './HomeTopSection';

const mapStateToProps = state => ({
  queryParams: state.movies.queryParams,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

export const HomePage = ({ queryParams }: Props): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParams.search) {
      dispatch(setQueryParams({ search: '' }));
    }
  }, [dispatch, queryParams]);

  return (
    <>
      <HomeTopSection />
    </>
  );
};

export default connector(HomePage);
