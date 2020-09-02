import { Component } from 'react';
import './DropdownMenu.scss';

type Props = {
  caption?: string,
  children: any
};

type State = {
  isOpen: boolean
};

const defaultCaption = (
  <span className="dropdown-menu__default-caption">
    &#x22EE;
  </span>
);

export class DropdownMenu extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggleMenu = (): void => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render():JSX.Element {
    const { children, caption } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="dropdown-menu">
        <button
          type="button"
          className="dropdown-menu__toggle-btn"
          onClick={this.toggleMenu}
        >
          {caption || defaultCaption}
        </button>
        {isOpen ? (
          <ul className="list-items">
            <li className="list-items__title">
              <button type="button" onClick={this.toggleMenu}>&#9587;</button>
            </li>
            {children}
          </ul>
        ) : null}
      </div>
    );
  }
}
