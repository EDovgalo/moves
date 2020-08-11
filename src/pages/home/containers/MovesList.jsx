import React, { Component } from 'react';
import { MoveCard } from '../components/MoveCard';

export class MovesList extends Component {
    moves = [
        {
            id: 1,
            title: 'title 1',
            ganre: 'test',
            data: 'date',
        },
        {
            id: 2,
            title: 'title 1',
            ganre: 'test',
            data: 'date',
        },
        {
            id: 3,
            title: 'title 1',
            ganre: 'test',
            data: 'date',
        },
    ];

    render() {
        return (
            <div className="moves-list">
                {moves.map((item) => (
                    <MoveCard key={item.id} {...item} />
                ))}
            </div>
        );
    }
}
