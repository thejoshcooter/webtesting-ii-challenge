import React, { Component } from 'react';

// import display
import Display from './Display';

class Dashboard extends Component {
    state= {
        strikes: 0,
        balls: 0,
    }

    hit = e => {
        e.preventDefault();
        // console.log('hit');
        this.setState({ strikes: 0, balls: 0 });
    };

    strike = e => {
        e.preventDefault();
        // console.log('strike');
        if (this.state.strikes === 2) {
            this.setState({ strikes: 0, balls: 0 })
        } else {
            this.setState({ ...this.state, strikes: this.state.strikes + 1 });
        }
    }

    ball = e => {
        e.preventDefault();
        // console.log('ball');
        if (this.state.balls === 3) {
            this.setState({ strikes: 0, balls: 0 });
        } else {
            this.setState({ ...this.state, balls: this.state.balls + 1 });
        }
    };
    
    render() {
        return (
            <div>
                <span>*** DASHBOARD ***</span>
                <Display strikes={this.state.strikes} balls={this.state.balls} />
                <button onClick={this.hit}>hit</button>
                <button onClick={this.strike}>strike</button>
                <button onClick={this.ball}>ball</button>              
                <button>foul</button><br />
                <span>*** DASHBOARD ***</span>
            </div>
        );
    }
};

export default Dashboard;