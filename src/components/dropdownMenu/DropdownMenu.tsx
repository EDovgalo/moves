import { Component, ReactNode } from 'react';
import './DropdownMenu.scss';

type Props = {
    caption?: string,
    children: ReactNode
};

type State = {
    isOpen: boolean
};

const defaultCaption = <span className="dropdown-menu__default-caption">
    &#x22EE;
</span>;

export class DropdownMenu extends Component<Props, State> {

    state = {
        isOpen: false,
    };

    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    render() {
        const { children, caption } = this.props;
        const { isOpen } = this.state;

        return <div className="dropdown-menu">
            <button className="dropdown-menu__toggle-btn" onClick={this.toggleMenu}>
                {caption || defaultCaption}
            </button>
            {isOpen ? <ul className="list-items">
                <li className="list-items__title">
                    <span onClick={this.toggleMenu}>&#9587;</span>
                </li>
                {children}
            </ul> : null}
        </div>;
    }

}
