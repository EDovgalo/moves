import React, { Component } from 'react';
import {AppLabel} from '../../../components/AppLabel';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <AppLabel />
                <button className="header__btn--add add-btn">+ add movie</button>
            </div>
        );
    }
}
