import { Link } from 'react-router-dom';
import './AppLabel.scss';

export const AppLabel = (): JSX.Element => (
  <Link to="/">
    <h2 className="app-label">
      <b>netflix</b>
      roulette
    </h2>
  </Link>
);
