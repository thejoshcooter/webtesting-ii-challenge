// display component import
import React from 'react';
import Display from './Display';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<Display />', () => {
    describe('Component Creation', () => {
        it('renders without crashing', () => {
           const div = document.createElement('div');
           ReactDOM.render(<Display />, div);
           ReactDOM.unmountComponentAtNode(div); 
        });

        it('renders without errors', () => {
            render(<Display />)
        });
    });

    describe('Component Functionality', () => {
        it('display balls and strikes', () => {
            const { getByText } = render(<Display />);
            getByText(/balls/i);
            getByText(/strikes/i);
        });
        
        it.todo('displays balls and strikes');
        it.todo('updates when user records activity on Dashboard');
    });
});