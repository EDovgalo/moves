import React, { Component } from 'react';
import './Search.scss';

export class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="wrapper">
                    <h4 className="search__title">{this.props.title}</h4>
                    <input
                        className="search__input"
                        placeholder={this.props.placeholder}
                    />
                    <button className="search__btn--search add-btn">
                        search
                    </button>
                </div>
            </div>
        );
    }
}
