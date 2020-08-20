import { AppLabel } from '../../../components/AppLabel';
import './Header.scss';

export const Header = () => {
    return (
        <div className="header">
            <AppLabel/>
            <button className="header__btn--add add-btn">+ add movie</button>
        </div>
    );
};
