import React, { Component } from 'react';

// import display
import Display from './Display';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <span>*** DASHBOARD ***</span>
                <Display />
                <span>*** DASHBOARD ***</span>
            </div>
        );
    }
};

export default Dashboard;