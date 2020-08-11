import React, { Component } from 'react';
import { Search } from './Search';
import { Header } from './Header';
import './TopSection.scss';

export class TopSection extends Component {
    render() {
        return (
            <div className="top-section">
                <Header />
                <Search title="find your movie" placeholder="What do you want to watch?"/>
            </div>
        );
    }
}
