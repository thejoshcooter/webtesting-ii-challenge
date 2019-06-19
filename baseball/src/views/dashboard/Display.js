import React, { Component } from 'react';

class Display extends Component {
    state = {
        balls: 0,
        strikes: 0
    };

    render() {
        return (
            <div>
                <h3>At-Bat Count</h3>
                <span>Balls: {this.state.balls}</span>
                <span>Strikes: {this.state.strikes}</span>
            </div>
        );
    };
};

export default Display;