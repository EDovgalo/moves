import './NotFound.scss';
import { useEffect } from 'react';

type Props = {
  title: string,
  didMount?: (state: boolean) => void
}
const defaultDidMount = (state: boolean) => state;

export const NotFound = ({ title, didMount = defaultDidMount }: Props): JSX.Element => {
  useEffect(() => {
    didMount(true);
    return () => didMount(false);
  }, []);

  return (
    <div className="not-found">
      <span>{`${title} Not found`}</span>
    </div>
  );
};
