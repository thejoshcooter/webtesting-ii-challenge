import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    describe('Component Creation', () => {
        it('renders without crashing', () => {
           const div = document.createElement('div');
           ReactDOM.render(<Dashboard />, div);
           ReactDOM.unmountComponentAtNode(div); 
        });

        it('renders without errors', () => {
            render(<Dashboard />)
        });
    });
});

