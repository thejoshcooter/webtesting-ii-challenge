import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <h3>At-Bat Count</h3>
                <span>Balls: {this.props.balls}</span>
                <span>Strikes: {this.props.strikes}</span>
            </div>
        );
    };
};

export default Display;