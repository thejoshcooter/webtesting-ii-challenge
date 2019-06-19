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

    describe('Hit Button', () => {
        it.todo('creates a hit button');
        it.todo('resets balls and strikes when clicked');
    });

    describe('Strike Button', () => {
        it.todo('creates a strike button');
        it.todo('records a strike when clicked');
        it.todo('resets when 3 strikes are recorded');
    });

    describe('Ball Button', () => {
        it.todo('creates a ball button');
        it.todo('records a ball when clicked');
        it.todo('resets when 4 balls are recorded');
    });

    describe('Foul Button', () => {
        it.todo('creates a foul button');
        it.todo('records a foul when clicked');
        it.todo('adds 1 strike');
        it.todo('increases strikes up to a maximum of 2');
    });
});

