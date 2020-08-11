import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__title">
                    <b>netflix</b>roulette
                </h1>
                <button className="header__btn--add add-btn">+ add movie</button>
            </div>
        );
    }
}
