import React, { Component } from 'react';
import './Filters.scss';

export class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <ul className="filters-list">
                    <li className="filters-list__item">All</li>
                    <li className="filters-list__item">Documentary</li>
                    <li className="filters-list__item">Comedy</li>
                    <li className="filters-list__item">Horror</li>
                    <li className="filters-list__item">Crime</li>
                </ul>
                <div>
                    <span>Sort by</span>
                </div>
            </div>
        );
    }
}
