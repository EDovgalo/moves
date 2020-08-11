import React, { Component } from 'react';

export class MoveCard extends Component {
    render() {
        return (
            <div className="move-card">
                <span>{this.props.title}</span>
            </div>
        );
    }
}
