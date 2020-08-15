import React, { Component } from 'react';
import './Filters.scss';

export class Filters extends Component {

    sortNames: Array<string> = [
        'release date',
        'title',
        'genre',
    ];

    render() {
        return (
            <div className="filters">
                <div className="filters-wrapper">
                    <ul className="filters-list">
                        <li className="filters-list__item">All</li>
                        <li className="filters-list__item">Documentary</li>
                        <li className="filters-list__item">Comedy</li>
                        <li className="filters-list__item">Horror</li>
                        <li className="filters-list__item">Crime</li>
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
                <div className="vertical-line"></div>
            </div>
        );
    }
}
