import './Search.scss';

type Props = {
    placeholder?: string,
    title?: string
}

export const Search = ({ title, placeholder }: Props) => {

    return (
        <form className="search">
            <div className="wrapper">
                <h4 className="search__title">{title}</h4>
                <input
                    className="search__input"
                    placeholder={placeholder}
                />
                <button className="search__btn--search add-btn">
                    search
                </button>
            </div>
        </form>
    );
};
