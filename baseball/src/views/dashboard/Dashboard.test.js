import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';

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
        it('creates a hit button', () => {
            const { getByText } = render(<Dashboard />);
            const button = getByText(/hit/);
        });

        it('resets balls and strikes', () => {
            const { getByText, queryByText } = render(<Dashboard />);
            const hit = getByText(/hit/);
            const strike = getByText(/strike/);

            fireEvent.click(strike);
            fireEvent.click(strike);
            fireEvent.click(hit);

            expect(getByText(/strikes: 0/i)).toBeTruthy()
        });
        
        // it.todo('creates a hit button');
        // it.todo('resets balls and strikes when clicked');
    });

    describe('Strike Button', () => {
        it('creates a strike button', () => {
            const { getByText } = render(<Dashboard />);
            const button = getByText(/strike/);
        });

        it('records a strike when clicked', () => {
            const { getByText } = render(<Dashboard />);
            const strike = getByText(/strike/);

            fireEvent.click(strike);
            fireEvent.click(strike);

            expect(getByText(/strikes: 2/i)).toBeTruthy();
        });

        it('resets when 3 strikes are recorded', () => {
            const { getByText } = render(<Dashboard />);
            const strike = getByText(/strike/);

            fireEvent.click(strike);
            fireEvent.click(strike);
            fireEvent.click(strike);

            expect(getByText(/strikes: 0/i)).toBeTruthy();
        });
        
        // it.todo('creates a strike button');
        // it.todo('records a strike when clicked');
        // it.todo('resets when 3 strikes are recorded');
    });

    describe('Ball Button', () => {
        it('creates a ball button', () => {
            const { getByText } = render(<Dashboard />);
            const ball = getByText(/ball/);
        });

        it('records a ball when clicked', () => {
            const { getByText } = render(<Dashboard />);
            const ball = getByText(/ball/);

            fireEvent.click(ball);
            

            expect(getByText(/balls: 1/i)).toBeTruthy();
        });

        it('resets when 4 balls are recorded', () => {
            const { getByText } = render(<Dashboard />);
            const ball = getByText(/ball/);

            fireEvent.click(ball);
            fireEvent.click(ball);
            fireEvent.click(ball);
            fireEvent.click(ball);

            expect(getByText(/balls: 0/i)).toBeTruthy();
        });
        
        // it.todo('creates a ball button');
        // it.todo('records a ball when clicked');
        // it.todo('resets when 4 balls are recorded');
    });

    describe('Foul Button', () => {
        it('creates a foul button', () => {
            const { getByText } = render(<Dashboard />);
            const foul = getByText(/foul/);
        });
        
        it.todo('creates a foul button');
        it.todo('records a foul when clicked');
        it.todo('adds 1 strike');
        it.todo('increases strikes up to a maximum of 2');
    });
});

