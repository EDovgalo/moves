import './NotFound.scss';

type Props = {
  title: string
}

export const NotFound = ({ title }: Props): JSX.Element => (
  <div className="not-found">
    <span>{`${title} Not found`}</span>
  </div>
);
