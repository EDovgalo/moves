import './Search.scss';

type Props = {
    placeholder?: string,
    title?: string
}

export const Search = ({ title, placeholder }: Props): JSX.Element => (
  <form className="search">
    <div className="wrapper">
      <h4 className="search__title">{title}</h4>
      <input
        className="search__input"
        placeholder={placeholder}
        />
      <button type="button" className="search__btn--search add-btn">
        search
      </button>
    </div>
  </form>
);
