import React, { Component } from 'react';
import './HomePage.scss';
import { TopSection } from './components/TopSection';
import { Filters } from './components/Filters';
import { MovesList } from './containers/MovesList';

export class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <TopSection/>
                <Filters/>
                <MovesList/>
            </div>
        );
    }
}
