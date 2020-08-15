import React, { Component } from 'react';
import './Filters.scss';

export class Filters extends Component {

    sortNames: Array<string> = [
        'release date',
        'title',
        'genre',
    ];

    filters = [
        'All',
        'Documentary',
        'Comedy',
        'Horror',
        'Crime',
    ];

    render() {
        return (
            <div className="filters">
                <div className="filters-wrapper">
                    <ul className="filters-list">
                        {this.filters.map(item => <li key={item}
                                                      className="filters-list__item">{item}</li>)}

                    </ul>
                    <div className="filters-sort">
                        <span className="filters-sort__title">Sort by</span>
                        <select className="filters-sort__select">
                            {this.sortNames.map(item => <option key={item}
                                                                value={item}>{item}
                            </option>)}
                        </select>
                    </div>
                </div>
                <div className="vertical-line"/>
            </div>
        );
    }
}
